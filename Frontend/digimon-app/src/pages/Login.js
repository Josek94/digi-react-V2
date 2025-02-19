import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (respuesta.ok) {
        setMensaje('Inicio de sesión exitoso');
        // Aquí podrías guardar el token si lo necesitas:
        // const data = await respuesta.json();
        // localStorage.setItem('token', data.token);

        navigate('/'); // Redirigir a la página principal
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
      <h1>Inicio de Sesión</h1>
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
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
      <p className="mt-3">{mensaje}</p>

      <button className="btn btn-link" onClick={() => navigate('/registro')}>
        ¿No tienes cuenta? Regístrate aquí
      </button>
    </div>
  );
}

export default Login;