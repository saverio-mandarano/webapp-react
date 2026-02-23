import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div className="card mb-4 homepage">
      <img
        src="../../public/warner-bros.jpg"
        className="card-img-top"
        alt="warner bross img"
      />
      <div className="card-body">
        <h5 className="card-title">Titolo del film</h5>
        <address>
          <i>Regista</i>
        </address>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          ratione veritatis sunt molestias nihil odit totam, quis corporis
          laboriosam excepturi. Labore vero molestiae eveniet explicabo esse
          iure laborum nemo odio.
        </p>
        <Link to={`movies/1`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
