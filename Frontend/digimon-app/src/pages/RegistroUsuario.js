import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistroUsuario() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = { username, password, admin };

    try {
      const respuesta = await fetch('http://localhost:8080/usuarios/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
      });

      if (respuesta.ok) {
        setMensaje('Usuario registrado con éxito');
        setUsername('');
        setPassword('');
        setAdmin(false);

        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        const errorData = await respuesta.json();
        setMensaje('Error: ' + errorData.message);
      }
    } catch (error) {
      setMensaje('Error al conectar con el servidor');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={admin}
            onChange={(e) => setAdmin(e.target.checked)}
          />
          <label className="form-check-label">¿Administrador?</label>
        </div>
        <button type="submit" className="btn btn-success">Registrarse</button>
      </form>
      <p className="mt-3">{mensaje}</p>

      <button className="btn btn-link" onClick={() => navigate('/')}>
        Volver al Inicio de Sesión
      </button>
    </div>
  );
}

export default RegistroUsuario;