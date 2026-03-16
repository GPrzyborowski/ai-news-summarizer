package com.github.krzsta.server.service;

import com.github.krzsta.server.model.AppUser;
import com.github.krzsta.server.dto.LoginRequest;
import com.github.krzsta.server.dto.LoginResponse;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.github.krzsta.server.dto.RegisterRequest;
import com.github.krzsta.server.exceptions.InvalidCredentialsException;
import com.github.krzsta.server.exceptions.UserAlreadyExistsException;
import com.github.krzsta.server.repository.UserRepository;

@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AppUser register(RegisterRequest req) {
        if (userRepository.existsByEmail(req.email())) {
            throw new UserAlreadyExistsException("Email already exists.");
        }
        
        AppUser user = new AppUser();
        user.setUsername(req.username());
        user.setEmail(req.email());
        user.setPasswordHash(passwordEncoder.encode(req.password()));

        return userRepository.save(user);
    }

    public LoginResponse login(LoginRequest req) {
        AppUser user = userRepository.findByEmail(req.email())
            .orElseThrow(() -> new InvalidCredentialsException("Invalid email or password."));

        if (!passwordEncoder.matches(req.password(), user.getPasswordHash())) {
            throw new InvalidCredentialsException("Invalid email or password.");
        }

        String token = jwtService.generateToken(user);
        return new LoginResponse(token, user.getUsername(), user.getEmail());
    }
}
