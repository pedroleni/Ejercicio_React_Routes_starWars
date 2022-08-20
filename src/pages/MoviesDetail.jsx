import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MoviesDetail.css";

const MovieDetail = () => {
  const {name} = useParams();
  const [movie,setMovie] = useState({});
  const getMovie = async () =>{
    const raw = await axios.get(`https://starwars-server.vercel.app/movies/${name}`);
    setMovie(raw.data.data.movie)


    
  }

  useEffect(()=>{
     getMovie()
     console.log(movie)
  },[])

 
  

  return (
    <figure className="movie-figure">
      {movie ? 
        <>
           <h2>{movie.name}</h2>
          <img src={movie.poster} alt={movie.name}  />
          <h2>{movie.name}</h2>
          <h3>{movie.year}</h3>
          <p>{movie.crawl}</p>
        </>
       : 
        <p>Loading...</p>
      }
    </figure>
  );
};

export default MovieDetail;
