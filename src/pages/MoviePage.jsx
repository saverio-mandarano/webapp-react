import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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

  return (
    <>
      <div className="card my-4 w-100">
        <div className="row g-0">
          <div className="col-md-4 moviepage">
            <img
              src="../../public/warner-bros.jpg"
              className="card-img-top "
              alt="warner bross img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Titolo del film</h5>
              <address>
                <i>Regista</i>
              </address>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                ratione veritatis sunt molestias nihil odit totam, quis corporis
                laboriosam excepturi. Labore vero molestiae eveniet explicabo
                esse iure laborum nemo odio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="btn btn-secondary">
        Back to Products List
      </Link>
    </>
  );
};

export default MoviePage;
