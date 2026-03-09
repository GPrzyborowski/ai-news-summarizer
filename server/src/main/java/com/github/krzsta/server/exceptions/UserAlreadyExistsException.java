package com.github.krzsta.server.exceptions;

public class UserAlreadyExistsException extends RuntimeException{
    
    public UserAlreadyExistsException(String message) {
        super(message);
    }
}
