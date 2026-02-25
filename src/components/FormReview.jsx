import { useState } from "react";
import axios from "axios";

const FormReview = (props) => {
  const movieId = props.movie_id;

  const endpoint = `http://localhost:3000/api/movies/${movieId}/reviews`;

  //oggetto per valori di default form
  const initFormData = {
    name: "",
    vote: 0,
    text: "",
  };

  //creo var di stato per gestione valori input del form
  const [formData, setFormData] = useState(initFormData);

  //funzione di gestione dati del form
  function setFieldValue(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  //funzione per gestione chiamata al submit del form
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(endpoint, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        console.log("recensione inviata");
        setFormData(initFormData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card shadow-sm mt-5 bg-body-secondary">
        <div className="card-body">
          <h4 className="mb-4">Write a Review</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="review-name" className="form-label">
                Your Name
              </label>
              <input
                id="review-name"
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={setFieldValue}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="review-text" className="form-label">
                Your Review
              </label>
              <textarea
                id="review-text"
                name="text"
                rows="5"
                className="form-control"
                placeholder="Write your opinion..."
                value={formData.text}
                onChange={setFieldValue}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="review-vote" className="form-label">
                Rating (1–5)
              </label>
              <input
                id="review-vote"
                type="number"
                name="vote"
                min="1"
                max="5"
                className="form-control"
                value={formData.vote}
                onChange={setFieldValue}
              />
            </div>

            <div>
              <button type="submit" className="btn btn-success px-4 py-1">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormReview;
