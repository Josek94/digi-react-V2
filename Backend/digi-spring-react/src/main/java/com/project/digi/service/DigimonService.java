package com.project.digi.service;



import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


import com.project.digi.entity.Digimon;
import com.project.digi.entity.DigimonDto;
import com.project.digi.repository.DigimonRepository;


@Service
public class DigimonService {

	private final WebClient webClient;
	
	
	
	public DigimonService(WebClient.Builder webClient) {
		this.webClient = webClient.codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(1048576))
				.build();
	}

	@Autowired
	private DigimonRepository digimonRepository;


    
    public void consumirApiToRecordById(Long id) {
    	String url = "https://digi-api.com/api/v1/digimon/";
    	DigimonDto digimonDto = webClient.get()
    	.uri(url + id)
    	.retrieve()
    	.bodyToMono(DigimonDto.class)
    	.block();
    	Digimon digimon = new Digimon(digimonDto.id(), digimonDto.name(), digimonDto.images().get(0).href());
    	
    	digimonRepository.save(digimon);
    }
    
    public void consumirApiToRecordAll() {
    	List<DigimonDto> digimonsDto = new ArrayList<>();
    	DigimonDto digimon;
    	
    	for(int i = 1; i <= 1460; i++) {
        String url = "https://digi-api.com/api/v1/digimon/" + i;
        digimon = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(DigimonDto.class)  
                .block();
        digimonsDto.add(digimon);
    	}
        // Mapeamos los DTOs a entidades Digimon
        List<Digimon> digimons = digimonsDto.stream()
                .map(digimonDto -> new Digimon(
                        digimonDto.id(),
                        digimonDto.name(),
                        digimonDto.images().get(0).href()
                ))
                .collect(Collectors.toList());

        // Guardamos todos los Digimons en la base de datos
        digimonRepository.saveAll(digimons);
    }
    
    
    
    public Digimon getDigimonById(Long id) {
    	return digimonRepository.getReferenceById(id);
    }
    
    public List<Digimon> getAllDigimon() {
    	return digimonRepository.findAll();
    }
}
