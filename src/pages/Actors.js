import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then(r=>r.json())
    .then(actorData=>setActors(actorData))
    .catch(error=>console.log(error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(actor=> <ActorCard key={actor.id} actor={actor} />)}
      </main>
    </>
  );
};

export default Actors;
