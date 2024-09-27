"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const task_1 = require("./tables/task");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const initServer = async () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: "*",
        methods: 'GET,POST,PUT,DELETE',
        credentials: true
    }));
    app.use(body_parser_1.default.json());
    const graphqlServer = new server_1.ApolloServer({ typeDefs: `#graphql
    ${task_1.Task.types}
    type Query{
        ${task_1.Task.quaries}
        
    }

    type Mutation{
        ${task_1.Task.mutations}
    }
        `, resolvers: {
            Query: {
                ...task_1.Task.resolvers.quaries
            },
            Mutation: {
                ...task_1.Task.resolvers.mutations
            }
        } });
    await graphqlServer.start();
    app.use('/graphql', (0, express4_1.expressMiddleware)(graphqlServer));
    return app;
};
exports.initServer = initServer;
