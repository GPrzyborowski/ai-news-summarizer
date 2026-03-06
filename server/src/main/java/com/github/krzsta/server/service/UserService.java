package com.github.krzsta.server.service;

import com.github.krzsta.server.model.AppUser;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.github.krzsta.server.dto.RegisterRequest;
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
        String email = req.email().trim().toLowerCase();

        if (email.isBlank() || req.password() == null || req.password().isBlank()) {
            throw new IllegalArgumentException("Email and password are required.");
        }

        if (userRepository.findByEmail(email).isPresent()) {
            throw new IllegalStateException("User with that email already exists.");
        }

        String hash = passwordEncoder.encode(req.password());
        AppUser user = new AppUser(email, hash);
        return userRepository.save(user);
    }
}
