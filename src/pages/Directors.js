import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then(r=>r.json())
    .then(directorData=>setDirectors(directorData))
    .catch(error=>console.log(error))
  },[])



  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director=> <DirectorCard key={director.id} director={director} />)}
      </main>
    </>
  );
};

export default Directors;
