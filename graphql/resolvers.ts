import { getById, movies } from "./db";

const resolvers = {
    Query : {
        movies : () => movies,
        movie : (_ : Object, { id }:any) => getById(id)
    }
}

export default resolvers;