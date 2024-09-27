import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { Task } from './tables/task';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { query } from 'express';



export const  initServer = async()=>{
    const app = express();
    app.use(cors({
  
        origin:"*",
        methods: 'GET,POST,PUT,DELETE',
        credentials:true
    
      }))
    app.use(bodyParser.json());
    const graphqlServer = new ApolloServer({ typeDefs:`#graphql
    ${Task.types}
    type Query{
        ${Task.quaries}
        
    }

    type Mutation{
        ${Task.mutations}
    }
        `, resolvers:{
            Query:{
                ...Task.resolvers.quaries


            },
            Mutation:{
                 ...Task.resolvers.mutations
            }
        }})
    await graphqlServer.start()
    app.use('/graphql', expressMiddleware(graphqlServer));
    return app;
}
