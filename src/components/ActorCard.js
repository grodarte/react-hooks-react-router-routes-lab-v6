import React from "react";

function ActorCard( {actor} ){
    return (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie=> <li key={movie}>{movie}</li>)}
          </ul>
        </article>
      )
}

export default ActorCard