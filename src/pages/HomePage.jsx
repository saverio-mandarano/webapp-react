import axios from "axios";
import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";

const endpoint = "http://localhost:3000/api/movies";

const HomePage = () => {
  // creo var di stato per gestire l'array di film restituiti dalla richiesta HTTP all'API
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get(endpoint)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // // funzione di rendering del listato dei film
  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <div
          className="card-container d-flex flex-wrap homepage"
          key={movie.id}
        >
          <MovieCard movieProp={movie} />
        </div>
      );
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
        {/* <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard /> */}

        {renderMovies()}
      </div>
    </>
  );
};

export default HomePage;
