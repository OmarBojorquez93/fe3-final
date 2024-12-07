import React, { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";

//Se cambió el nombre que tenía de global.context a Context para evitar errores en el export default 

export const GlobalContext = createContext();

export const initialState = {
  theme: "light",
  dentists: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAV":
      const updatedFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    default:
      return state;
  }
};

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url)
      .then(res => dispatch({ type: "SET_DENTISTS", payload: res.data }))
      .catch(err => console.error(err));
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;

export const useGlobalContext = () => useContext(GlobalContext);