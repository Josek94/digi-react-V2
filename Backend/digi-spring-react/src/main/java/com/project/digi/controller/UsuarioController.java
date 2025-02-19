package com.project.digi.controller;

import com.project.digi.entity.Usuario;
import com.project.digi.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/registro")
    public Usuario registrar(@RequestBody Usuario usuario) {
        return usuarioService.registrarUsuario(usuario);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Usuario usuario) {
        Optional<Usuario> resultado = usuarioService.autenticar(usuario.getUsername(), usuario.getPassword());
        if (resultado.isPresent()) {
            Usuario usuarioAutenticado = resultado.get();
            Map<String, Object> respuesta = new HashMap<>();
            respuesta.put("mensaje", "Login exitoso");
            respuesta.put("username", usuarioAutenticado.getUsername());
            respuesta.put("admin", usuarioAutenticado.isAdmin());
            return respuesta;
        } else {
            throw new RuntimeException("Credenciales inválidas");
        }
    }
}
