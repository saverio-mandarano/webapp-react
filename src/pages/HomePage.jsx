import axios from "axios";
import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";

// import hook custom del contesto globale
import { useGlobal } from "../contexts/GlobalContext";

const endpoint = "http://localhost:3000/api/movies";

const HomePage = () => {
  // creo var di stato per gestire l'array di film restituiti dalla richiesta HTTP all'API
  const [movies, setMovies] = useState([]);

  // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
  const { setIsLoading } = useGlobal();

  const fetchMovies = () => {
    // parte la chimata cambio var stato context di conseguenza
    setIsLoading(true);

    axios
      .get(endpoint)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setIsLoading(false));
  };

  // // funzione di rendering del listato dei film
  const renderMovies = () => {
    return movies.map((movie) => {
      return <MovieCard key={movie.id} movieProp={movie} />;
    });
  };

  // richiamo fetchMovie una volta sola, al montaggio della pagina
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1 className="mt-3">Welcome to "Streaming Community" Website</h1>
      <h3 className="subtitle ">The world's largest pirate film archive</h3>
      <div className="card-container d-flex flex-wrap homepage">
        {renderMovies()}
      </div>
    </>
  );
};

export default HomePage;
