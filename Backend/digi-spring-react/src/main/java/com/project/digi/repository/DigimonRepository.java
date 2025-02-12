package com.project.digi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.digi.entity.Digimon;

public interface DigimonRepository extends JpaRepository<Digimon, Long> {

}
