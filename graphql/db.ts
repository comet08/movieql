export let movies = [
  {
    id: 1,
    name: 'Avengers',
    score: 1,
  },
  {
    id: 2,
    name: 'The Lord of Ring',
    score: 1,
  },
  {
    id: 3,
    name: 'Killing Time',
    score: 1,
  },
  {
    id: 4,
    name: 'Spy',
    score: 1,
  },
];

export const getById = (id: Number) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);
  return filteredMovies[0];
};

export const deleteMovie = (id: Number) => {
  const cleanedMovies = movies.filter((movie) => id !== movie.id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  }
  return false;
};
export const addMovie = (name: string, score: number) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  console.log(newMovie);

  movies.push(newMovie);
  return newMovie;
};
