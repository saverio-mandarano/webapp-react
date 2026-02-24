import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import ReviewCard from "../components/ReviewCard";

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
      <section id="movie-details" className="card my-4 w-100">
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
      <section id="movie-reviews">{renderReviews()}</section>

      <Link to="/" className="btn btn-secondary">
        Back to Products List
      </Link>
    </>

    //  <>
    //         <header id="book" className="border-bottom border-1 mb-3">
    //             <div className="d-flex mb-3">
    //                 <img src={book.image} alt={book.title} />
    //             </div>
    //             <h1>{book.title}</h1>
    //             <h3 className="text-muted"><i>By {book.author}</i></h3>
    //             <p>{book.abstract}</p>
    //         </header>
    //         <section id="reviews">
    //             <header className="d-flex justify-content-between align-items-center mb-4">
    //                 <h4>Our community reviews</h4>
    //             </header>
    //             {rederReviews()}
    //         </section>
    //         <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
    //             <Link className="btn btn-secondary" to="/">Back to home</Link>
    //         </footer>
    //     </>
  );
};

export default MoviePage;
