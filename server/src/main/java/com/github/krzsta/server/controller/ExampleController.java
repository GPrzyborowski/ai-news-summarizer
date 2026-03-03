package com.github.krzsta.server.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class ExampleController {
    
    @GetMapping("/")
    public Map<String, String> testEndpoint() {
        return Map.of(
            "status", "OK",
            "message", "okok"
        );
    }
}
