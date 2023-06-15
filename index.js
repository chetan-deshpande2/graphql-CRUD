const { ApolloServer, gql } = require('apollo-server');

const users = [
  {
    firstName: 'GraphQL',
    lastName: 'isCool',
    email: 'GraphQL@isCool.com',
  },
];
const typeDefs = gql`
  type User {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    hello: String!
    randomNumber: Int!
    queryUsers: [User]!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    randomNumber: () => Math.round(Math.random() * 10),
    queryUsers: () => users,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({ port: 8080 })
  .then(({ url }) => console.log(`GraphQL server running at ${url}`));
