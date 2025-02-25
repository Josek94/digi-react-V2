import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DigimonCard from "../components/DigimonCard";

function DigimonList() {
  const [digimons, setDigimons] = useState([]);
  const user = JSON.parse(localStorage.getItem("usuario"));
  useEffect(() => {
    fetch("http://localhost:8080/digimon/get/all")
      .then((response) => response.json())
      .then((data) => setDigimons(data))
      .catch((error) => console.error("Error fetching Digimons:", error));
  }, []);

  const handleImport = async () => {
    try {
      const response = await fetch("http://localhost:8080/digimons/import", {
        method: "POST",
      });

      if (response.ok) {
        alert("Importación exitosa");
        // Opcional: recargar la lista después de importar
        const nuevosDigimons = await response.json();
        setDigimons(nuevosDigimons);
      } else {
        alert("Error al importar");
      }
    } catch (error) {
      console.error("Error en la importación:", error);
    }
  };

  return (
    <div className="container mt-4">
      {user?.admin && (
        <button onClick={handleImport} className="btn btn-primary mb-3">
          Importar Digimons
        </button>
      )}
      <h1 className="text-center mb-4">Lista de Digimon</h1>
      <div className="row">
        {digimons.map((digimon) => (
          <div key={digimon.id} className="col-md-3 mb-4">
            <Link to={`/digimon/${digimon.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <DigimonCard digimon={digimon} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DigimonList;