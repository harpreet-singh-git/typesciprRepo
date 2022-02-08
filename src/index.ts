import express from 'express';
import { Router, Response, Request } from "express";
import connectDB from "../config/db";
import user from "../src/routes/profile.routes";
import bodyParser from "body-parser";
import auth from "../config/auth";
// import { graphql, buildSchema } from "graphql";
// import { ApolloServer } from 'apollo-server';
// import { makeExecutableSchema } from "graphql-tools";
// import fs from "fs";
// import schema from ".";
// const typeDefs = fs.readFileSync('./schema.graphql', { encoding: 'utf-8' })
// import resolvers from './resolver';
// const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use("/api/auth", auth);

app.use("/api", user);
// app.use("/api/profile", profile);

// A schema is constructed using GraphQL schema language  
// const schema = buildSchema(`
// type Query {  
//   hello: String  
// }`);

// The root provides a resolver function for each API endpoint  
const root = {
    hello: () => {
        return 'Hello world! This is the first GrapghQL query';
    },
};

// Run the GraphQL query '{ hello }' and print out the response  
// graphql(schema, '{hello}', root)
//     .then((response) => {
//         console.log(response);
//     });


// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

const port: number = 3000;
const server = app.listen(port, () => {
    console.log('The application is listening on port', `${port}`);
})

export default server;