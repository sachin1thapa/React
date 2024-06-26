import { useState } from 'react';

function ArrayObject() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      moviesname: 'Harry Potter and the Goblet of Fire',
      producer: 'J.K. Rowling',
      actor: 'Daniel Radcliffe',
      budget: 43,
    },
    {
      id: 2,
      moviesname: 'The Lord of the Rings: The Return of the King',
      producer: 'Peter Jackson',
      actor: 'Elijah Wood',
      budget: 94,
    },
    {
      id: 3,
      moviesname: 'Inception',
      producer: 'Emma Thomas',
      actor: 'Leonardo DiCaprio',
      budget: 160,
    },
    {
      id: 4,
      moviesname: 'The Dark Knight',
      producer: 'Christopher Nolan',
      actor: 'Christian Bale',
      budget: 185,
    },
    {
      id: 5,
      moviesname: 'Interstellar',
      producer: 'Christopher Nolan',
      actor: 'Matthew McConaughey',
      budget: 165,
    },
  ]);
  console.log(movies);
  const ChangeName = () => {
    setMovies(
      movies.map((CurrElem) =>
        CurrElem.id === 2 ? { ...CurrElem, moviesname: 'Sachin Thapa' } : CurrElem
      )
    );
  };

  const deletedata = () => {
    setMovies(movies.slice(0, -1));
  };

  return (
    <>
      <button onClick={ChangeName}>Change Movies name</button>
      <button onClick={deletedata}>delete Movies</button>

      <ul>
        {movies.map((CurrElem, index) => {
          const { moviesname, producer, actor, budget } = CurrElem;
          return (
            <li key={index}>
              <h1>{moviesname}</h1>
              <p>Producer: {producer}</p>
              <p>Actor: {actor}</p>
              <p>Budget: ${budget} million</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArrayObject;
