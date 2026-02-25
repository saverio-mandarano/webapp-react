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
      <div className="card">
        <header className="card-header">
          <h5>Add your review</h5>
        </header>
        <div className="card-body"></div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default FormReview;
