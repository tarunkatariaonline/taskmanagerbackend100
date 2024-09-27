import { queryResolvers } from './query';
import { mutationResolvers } from './mutation';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from '../schema';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';


export const resolvers = {
  ...queryResolvers,
  ...mutationResolvers,
};


