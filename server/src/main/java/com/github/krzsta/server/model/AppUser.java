package com.github.krzsta.server.model;

import java.time.OffsetDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "app_user")
public class AppUser {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password_hash", nullable = false, unique = true)
    private String passwordHash;

    @Column(name = "created_at", nullable = false)
    private OffsetDateTime createdAt = OffsetDateTime.now();

    public AppUser() {}

    public AppUser(String email, String passwordHash) {
        this.email = email;
        this.passwordHash = passwordHash;
    }

    public Long getId(){
        return this.id;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPasswordHash() {
        return this.passwordHash;
    }

    public OffsetDateTime getCreatedAt() {
        return this.createdAt;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }
}
