import { getMovies } from './db';

const resolvers = {
  Query: {
    movies: (_: Object, {limit, rating}:any) => getMovies(limit, rating),
  },
};

export default resolvers;
