import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieID = params.id

  console.log(params)
  console.log(movie)

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
      </main>
    </>
  );
};

export default Movie;
