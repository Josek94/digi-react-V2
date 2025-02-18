import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DigimonDetail() {
  const { id } = useParams();
  const [digimon, setDigimon] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/digimon/get/${id}`)
      .then((response) => response.json())
      .then((data) => setDigimon(data))
      .catch((error) => console.error('Error fetching Digimon:', error));
  }, [id]);

  if (!digimon) {
    return <div className="text-center mt-5">Cargando Digimon...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{digimon.name}</h1>
      <img src={digimon.image} alt={digimon.name} className="img-fluid" />
      <p>ID: {digimon.id}</p>
      {/* Aquí podrías añadir más info si tu entidad Digimon tiene más atributos */}
    </div>
  );
}

export default DigimonDetail;