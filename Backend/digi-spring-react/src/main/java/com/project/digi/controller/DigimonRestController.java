package com.project.digi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.databind.JsonNode;
import com.project.digi.entity.Digimon;
import com.project.digi.service.DigimonService;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/digimon")
public class DigimonRestController {
	
	@Autowired
	private DigimonService digimonService;

    @GetMapping("/import/{id}")
    public void importDigimonbyid(@PathVariable Long id) {
        digimonService.consumirApiToRecordById(id);
    }
    
    @GetMapping("/import")
    public void importDigimons() {
        digimonService.consumirApiToRecordAll();
    }
    
    @GetMapping("/get/{id}")
    public Digimon getDigimonById(@PathVariable Long id) {
    	return digimonService.getDigimonById(id);
    }
    
    @GetMapping("/get/all")
    public List<Digimon> getAllDigimons() {
    	return digimonService.getAllDigimon();
    }
    
    

}
