package com.project.digi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.digi.entity.Usuario;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByUsername(String username);
}
