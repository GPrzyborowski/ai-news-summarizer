package com.github.krzsta.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.krzsta.server.service.GeminiService;

@RestController
public class GeminiController {
    private final GeminiService geminiService;

    public GeminiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @GetMapping("/ask")
    public String ask(@RequestParam String q) {
        return geminiService.askGemini(q);
    }
}
