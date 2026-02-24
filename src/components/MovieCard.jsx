import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { id, title, director, abstract, image_url } = props.movieProp;

  return (
    <div className="card mb-4 homepage">
      <img src={image_url} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <address>
          <i>By {director}</i>
        </address>
        <p className="card-text">{abstract}</p>
        <Link to={`movies/${id}`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
