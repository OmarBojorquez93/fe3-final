import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/Context";

const Detail = () => {
  const { id } = useParams();
  const { state } = useGlobalContext();
  const dentist = state.dentists.find((d) => d.id === parseInt(id));

  return (
    <div className="detail">
      {dentist ? (
        <>
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio Web: <a href={dentist.website} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
        </>
      ) : (
        <p>Dentista no encontrado.</p>
      )}
    </div>
  );
};

export default Detail;