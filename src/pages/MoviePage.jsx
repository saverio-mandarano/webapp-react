import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import ReviewCard from "../components/ReviewCard";
import FormReview from "../components/FormReview";

const endpoint = "http://localhost:3000/api/movies";

const MoviePage = () => {
  const { id } = useParams();

  // creo var di stato per gestire il singolo film restituito dalla richiesta HTTP all'API
  const [movie, setMovie] = useState({});

  const fetchMovie = () => {
    axios
      .get(`${endpoint}/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchMovie, []);

  //destrutturo movie
  const { title, director, genre, release_year, abstract, image_url } = movie;

  // funzione di rendering delle recensioni di un singolo film
  const renderReviews = () => {
    return movie.reviews?.map((review) => {
      return <ReviewCard key={review.id} reviewProp={review} />;
    });
  };

  return (
    <>
      {/* SEZIONE DETTAGLI DEL FILM */}
      <section id="movie-details" className="card my-4 w-100 bg-body-secondary">
        <div className="row g-0 anteprima">
          <div className="col-md-4 moviepage">
            <img src={image_url} className="card-img-top " alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <address>
                <i>By {director}</i>
              </address>
              <p className="card-text">{abstract}</p>
              <h6>Movie Details:</h6>
              <ul>
                <li>Genre: {genre}</li>
                <li>Release year: {release_year}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE RECENSIONI DEL FILM */}
      <section id="movie-reviews ">{renderReviews()}</section>

      {/* SEZIONE FORM REVIEW */}
      <section id="form-reviews">
        <FormReview movie_id={movie.id} />
      </section>

      {/* <Link to="/" className="btn btn-secondary">
        Back to Products List
      </Link> */}
    </>
  );
};

export default MoviePage;
