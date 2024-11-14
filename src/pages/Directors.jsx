import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/directors`)
    .then(r=>r.json())
    .then(directorData=>setDirectors(directorData))
    .catch(error=>console.log(error))
  }, [])

  if(!directors){
    return <span>Loading...</span>
  }

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director=>{
          return (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map(movie=>{
                  return (
                    <li key={movie}>{movie}</li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </main>
    </>
  );
};

export default Directors;
