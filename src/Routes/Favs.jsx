import React, { useContext } from "react";
import { useGlobalContext } from "../Components/utils/Context";

const Favs = () => {
  const { state } = useGlobalContext();

  return (
    <div className="favs">
      <h2>Dentistas Destacados</h2>
      {state.favs.length > 0 ? (
        state.favs.map((dentist) => (
          <div key={dentist.id} className="card">
            <h3>{dentist.name}</h3>
            <p>Email: {dentist.email}</p>
            <p>Teléfono: {dentist.phone}</p>
          </div>
        ))
      ) : (
        <p>No hay dentistas destacados aún.</p>
      )}
    </div>
  );
};

export default Favs;