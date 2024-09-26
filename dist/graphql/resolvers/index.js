"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = exports.resolvers = void 0;
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const schema_1 = require("../schema");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
exports.resolvers = {
    ...query_1.queryResolvers,
    ...mutation_1.mutationResolvers,
};
const initServer = async () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json());
    const graphqlServer = new server_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: exports.resolvers });
    await graphqlServer.start();
    app.use('/graphql', (0, express4_1.expressMiddleware)(graphqlServer));
    return app;
};
exports.initServer = initServer;
