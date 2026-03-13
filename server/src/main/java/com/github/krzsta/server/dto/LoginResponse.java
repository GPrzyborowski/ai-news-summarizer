package com.github.krzsta.server.dto;

public record LoginResponse (

    String token,
    String username,
    String email
) {}
