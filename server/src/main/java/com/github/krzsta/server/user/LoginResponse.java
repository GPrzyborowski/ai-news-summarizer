package com.github.krzsta.server.user;

public record LoginResponse (

    String token,
    String username,
    String email
    
) {}