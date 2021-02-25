import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers/resolvers';
import typeDefs from './schema/schema';

const server = new ApolloServer({
    resolvers,
    typeDefs
});

server.listen()
    .then((serverInfo) => console.log(`Server ready at ${serverInfo.url}`));