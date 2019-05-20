package com.sandy.example.pilgrimService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class PilgrimServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PilgrimServiceApplication.class, args);
	}

}

