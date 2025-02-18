package com.project.digi.entity;


import java.util.List;



public record DigimonDto(Long id, String name, List<Images> images) { 
	public record Images(String href) {
	}
	
}
