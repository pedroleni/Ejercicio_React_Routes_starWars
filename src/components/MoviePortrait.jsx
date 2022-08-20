import React from "react";
import { Link } from "react-router-dom";
import "./MoviePortrait.css";

const MoviePortait = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.name}`}>
      <figure className="movie-portrait">
        <img src={movie.poster} alt={movie.name} />
      </figure>
    </Link>
  );
};

export default MoviePortait;
