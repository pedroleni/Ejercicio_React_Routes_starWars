

import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviePortrait from "../components/MoviePortrait";
import "./Movies.css";
const Movies = () => {
  const [MoviesList, setMoviesList] = useState([]);

  const getMovies = async () => {
    const raw = await axios.get(
      "https://starwars-server.vercel.app/movies"
    );
    setMoviesList(raw.data.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="movies">
      <h2>Movies</h2>
      <div className="gallery_movies">
        {MoviesList.length > 0 ? (
          MoviesList.map((movie) => (
            <MoviePortrait movie={movie} key={movie._id} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Movies;
