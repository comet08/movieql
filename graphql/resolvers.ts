import { getById, movies, addMovie, deleteMovie } from './db';

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_: Object, { id }: any) => getById(id),
  },
  Mutation: {
    addMovie: (_: Object, { name, score }: any) => addMovie(name, score),
    deleteMovie: (_: Object, { id }: any) => deleteMovie(id),
  },
};

export default resolvers;
