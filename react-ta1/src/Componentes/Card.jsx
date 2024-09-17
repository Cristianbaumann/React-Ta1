import React from 'react';
import './Card.css'; // Estilos asociados

const Card = ({ titulo, descripcion, asignacion, FechaInicio, FechaFin }) => {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <div className="card-details">
        <p><strong>Persona asignada:</strong> {asignacion}</p>
        <p><strong>Fecha de inicio:</strong> {FechaInicio}</p>
        <p><strong>Fecha de fin:</strong> {FechaFin}</p>
      </div>
    </div>
  );
};

export default Card;
