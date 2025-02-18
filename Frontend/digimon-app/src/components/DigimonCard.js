import React from 'react';

function DigimonCard({ digimon }) {
  return (
    <div className="card text-center shadow-sm">
      <img src={digimon.image} className="card-img-top p-3" alt={digimon.name} />
      <div className="card-body">
        <h5 className="card-title">{digimon.name}</h5>
      </div>
    </div>
  );
}

export default DigimonCard;