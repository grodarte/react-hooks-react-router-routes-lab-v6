import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import React from "react";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieID = params.id

  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${movieID}`)
    .then(r=>r.json())
    .then(movieData=>setMovie(movieData))
    .catch(error=> console.log(error))
  }, [movieID])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {Array.isArray(movie.genres) ? (movie.genres.map(genre=> <span key={genre}>{genre}</span>)) : (<span>No genres available</span>)}   
        </main>
    </>
  );
};

export default Movie;
