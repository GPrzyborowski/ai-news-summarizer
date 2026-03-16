package com.github.krzsta.server.user;

import java.time.OffsetDateTime;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AppUserService {

    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AppUserService(AppUserRepository appUserRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public RegisterResponse register(RegisterRequest request) {

        if (appUserRepository.findByEmail(request.email()).isPresent()) {
            throw new IllegalArgumentException("Email already exists.");
        }

        AppUser user = new AppUser(
                request.username(),
                request.email(),
                passwordEncoder.encode(request.password()));

        user.setCreatedAt(OffsetDateTime.now());

        AppUser savedUser = appUserRepository.save(user);

        return new RegisterResponse(
                savedUser.getId(),
                savedUser.getUsername(),
                savedUser.getEmail(),
                savedUser.getCreatedAt().toString());
    }

    public LoginResponse login(LoginRequest request) {

        AppUser user = appUserRepository.findByEmail(request.email())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));

        if (passwordEncoder.matches(request.password(), user.getPasswordHash())) {

            String token = jwtService.generateToken(request.email());

            return new LoginResponse(
                token,
                user.getUsername(),
                user.getEmail()    
            );

        } else {

            throw new IllegalArgumentException("Invalid email or password.");

        }
    }
}
