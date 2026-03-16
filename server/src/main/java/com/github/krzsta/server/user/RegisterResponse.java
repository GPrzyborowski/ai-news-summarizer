package com.github.krzsta.server.user;

public record RegisterResponse(Long id, String username, String email, String createdAt) {}
