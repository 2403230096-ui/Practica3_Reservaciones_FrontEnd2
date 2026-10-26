import './App.css';
import React, { useState } from 'react';


function App() {
  
  const [Reservaciones,setReservaciones] = useState({});
  const [NombreCliente, setNombreCliente] = useState("");
  const [Invitados, setInvitados] = useState("");
  const [Hora, setHora] = useState("");
  const [mesas, setMesas] = useState("")
  const [Buscar, setBuscar] = useState()

  return (
    <div className="App">
      <h2 className="title">Reservaciones</h2>

        <div className="section search-bar">
            <input
              type="text"
              value={Buscar}
              onChange={(e) => setBuscar(e.target.value)}
              placeholder="🔍 Buscar por nombre, hora o mesa..."
            />
            {Buscar && (
              <button type="button" onClick={() => setBuscar("")}>
                ✕ Limpiar
              </button>
            )}
            <p>
              {reservacionesFiltradas.length} de {Reservaciones.length} reservaciones
            </p>
        </div>

      <form className="section" onSubmit={handleSubmit}>
        <label>
          Nombre del cliente:
          <input
            type="text"
            value={NombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            placeholder="Ej. Juan Pérez"
          />
        </label>

        <label>
          Número de invitados:
          <input
            type="number"
            min="1"
            value={Invitados}
            onChange={(e) => setInvitados(e.target.value)}
          />
        </label>

        <label>
          Hora:
          <input
            type="time"
            value={Hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </label>

        <label>
          Número de mesas:
          <input
            type="number"
            min="1"
            value={mesas}
            onChange={(e) => setMesas(e.target.value)}
          />
        </label>

        <button type="submit">Reservar</button>
      </form>

      <div className="section">
        <label>
          Buscar reservación:
          <input
            type="text"
            value={Buscar}
            onChange={(e) => setBuscar(e.target.value)}
            placeholder="Buscar por nombre"
          />
        </label>
      </div>

      <ul>
        {reservacionesFiltradas.length === 0 ? (
          <p>No hay reservaciones.</p>
        ) : (
          reservacionesFiltradas.map((r) => (
            <li key={r.id}>
              {r.NombreCliente} — {r.Invitados} invitados — {r.Hora} — {r.mesas} mesa(s)
              <button onClick={() => eliminarReservacion(r.id)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
