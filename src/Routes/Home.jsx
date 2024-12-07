import React, { useContext } from "react";
import { useGlobalContext } from "../Components/utils/Context";
import { Link } from "react-router-dom";

const Home = () => {
  const { state, dispatch } = useGlobalContext();

  const handleAddToFavs = (dentist) => {
    dispatch({ type: "ADD_FAV", payload: dentist });
  };

  return (
    <div className="home">
      {state.dentists.map((dentist) => (
        <div key={dentist.id} className="card">
          <h3>{dentist.name}</h3>
          <Link to={`/dentist/${dentist.id}`}>Ver más</Link>
          <button onClick={() => handleAddToFavs(dentist)}>
            Agregar a Favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;