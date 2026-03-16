package com.github.krzsta.server.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;

public record LoginRequest (
    
    @NotBlank(message = "Email is required.")
    @Email(message = "Email is invalid.")
    String email,

    @NotBlank(message = "Password is required.")
    String password
) {}
