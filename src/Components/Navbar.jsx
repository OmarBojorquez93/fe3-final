import React, { useContext } from "react";
import { useGlobalContext } from "./utils/Context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <nav className={`navbar ${state.theme}`}>
      <Link to="/home">Home</Link>
      <Link to="/favs">Favoritos</Link>
      <Link to="/contacto">Contacto</Link>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {state.theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  )
}

export default Navbar;