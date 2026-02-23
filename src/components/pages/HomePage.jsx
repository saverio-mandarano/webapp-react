import MovieCard from "../MovieCard";

const HomePage = () => {
  return (
    <>
      <h1 className="mt-3">Welcome to "Streaming Community" Website</h1>
      <h3 className="subtitle">The world's largest pirate film archive</h3>
      <div className="card-container d-flex flex-wrap">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
};

export default HomePage;
