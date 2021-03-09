import express from "express";
import { createServer } from "http";
import { ApolloServer, makeExecutableSchema, makeRemoteExecutableSchema } from "apollo-server-express"
import typeDefs from "./typeDefs";
import resolvers from "./resolvers"
import chalk from "chalk";
import { applyMiddleware } from "graphql-middleware"
import { log } from "./Logger";

const app = express();
const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema, log);

const apolloServer = new ApolloServer({
    schema: schemaWithMiddleware,
    context: ({ req, res }: any) => ({ req, res })
});
apolloServer.applyMiddleware({app, cors: false})

console.log(chalk.greenBright("hello"))

app.listen({ port: 8000 }, () => {
    console.log("GraphQL server is ready.")
});