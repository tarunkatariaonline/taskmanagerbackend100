import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from '../graphql/schema';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { resolvers } from './resolvers';


export const  initServer = async()=>{
    const app = express();
    app.use(cors({
        origin: "*",
    }));
    app.use(bodyParser.json());
    const graphqlServer = new ApolloServer({ typeDefs, resolvers })
    await graphqlServer.start()
    app.use('/graphql', expressMiddleware(graphqlServer));
    return app;
}
