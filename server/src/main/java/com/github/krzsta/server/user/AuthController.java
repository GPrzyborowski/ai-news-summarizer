package com.github.krzsta.server.user;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AppUserService userService;

    public AuthController(AppUserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@Valid @RequestBody RegisterRequest request) {

        RegisterResponse registerResponse = userService.register(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(registerResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {

        LoginResponse loginResponse = userService.login(request);

        return ResponseEntity.status(HttpStatus.OK).body(loginResponse);
    }

}
