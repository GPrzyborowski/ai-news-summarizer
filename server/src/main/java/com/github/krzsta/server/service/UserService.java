package com.github.krzsta.server.service;

import com.github.krzsta.server.model.AppUser;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.github.krzsta.server.dto.RegisterRequest;
import com.github.krzsta.server.exceptions.UserAlreadyExistsException;
import com.github.krzsta.server.repository.UserRepository;

@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public AppUser register(RegisterRequest req) {
        if (userRepository.existsByEmail(req.email())) {
            throw new UserAlreadyExistsException("Email already exists");
        }
        
        AppUser user = new AppUser();
        user.setUsername(req.username());
        user.setEmail(req.email());
        user.setPasswordHash(passwordEncoder.encode(req.password()));

        return userRepository.save(user);
    }
}
