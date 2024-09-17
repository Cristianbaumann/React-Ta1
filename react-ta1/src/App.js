import React from 'react';
import Card from './Componentes/Card';

const App = () => {
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="card-container">
        <Card
          titulo="Tarea 1"
          descripcion="Descripción de la tarea 1"
          asignacion="Juan Pérez"
          FechaInicio="2024-09-01"
          FechaFin="2024-09-10"
        />
        <Card
          titulo="Tarea 2"
          descripcion="Descripción de la tarea 2"
          asignacion="Ana García"
          FechaInicio="2024-09-05"
          FechaFin="2024-09-15"
        />
        <Card
          titulo="Tarea 3"
          descripcion="Descripción de la tarea 3"
          asignacion="Carlos López"
          FechaInicio="2024-09-10"
          FechaFin="2024-09-20"
        />
      </div>
    </div>
  );
};

export default App;
