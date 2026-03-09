package com.github.krzsta.server.controller;

import com.github.krzsta.server.dto.RegisterRequest;
import com.github.krzsta.server.dto.RegisterResponse;
import com.github.krzsta.server.model.AppUser;
import com.github.krzsta.server.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/auth")
public class AuthController {
    
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@Valid @RequestBody RegisterRequest req) {
        AppUser user = userService.register(req);
        
        RegisterResponse response = new RegisterResponse(
            user.getId(),
            user.getUsername(),
            user.getEmail(),
            user.getCreatedAt().toString()
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
