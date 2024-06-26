import { useState } from 'react';

function Object() {
  const [movies, setMovies] = useState({
    moviesname: 'Harry Potter and the Goblet of Fire',
    producer: 'J.K. Rowling',
    actor: 'Daniel Radcliffe',
    budget: 43,
  });

  const { moviesname, producer, actor, budget, BoxofficeCollection } = movies;

  const Changename = () => {
    setMovies({
      ...movies,
      actor: 'Sachin thapa',
      BoxofficeCollection: 500,
    });
  };

  return (
    <>
      <h1>{moviesname}</h1>
      <p>Producer: {producer}</p>
      <p>Actor: {actor}</p>
      <p>Budget: ${budget} million</p>
      {BoxofficeCollection && <p>BoxOfficecollection : ${BoxofficeCollection} million</p>}
      <button onClick={Changename}>Change the actor name</button>
    </>
  );
}

export default Object;
