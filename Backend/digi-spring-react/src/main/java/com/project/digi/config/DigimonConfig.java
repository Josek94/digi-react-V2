package com.project.digi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class DigimonConfig {
	
    @Bean
    public WebClient webClient() {
        return WebClient.builder()
                .baseUrl("https://digimon-api.vercel.app/api")
                .build();
    }
}
