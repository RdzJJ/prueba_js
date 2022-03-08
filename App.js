import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Navbar from ".components/Navbar";
import CharacterList from "./components/CharacterList";

function App() {
  const [characters,setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url ="https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((eror) => {
        console.log(error);
      };
};

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
};

useEffect(() => {
  fetchCharacters(url);
}, [])

return (