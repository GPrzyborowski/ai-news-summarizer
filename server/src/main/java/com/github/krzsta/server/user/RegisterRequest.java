package com.github.krzsta.server.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record RegisterRequest (

    @NotBlank(message = "Username is required.")
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters long.")
    @Pattern(
        regexp = "^[a-zA-Z0-9._]+$",
        message = "Username can only contain letters, numbers, dots and underscores."
    )
    String username,

    @NotBlank(message = "Email is required.")
    @Email(message = "Email is invalid.")
    String email,

    @NotBlank(message = "Password is required.")
    @Size(min = 8, max = 100, message = "Password must be between 8 and 100 characters long.")
    String password
    
) {}
