"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const types_1 = require("../task/types");
const mutations_1 = require("./mutations");
const quaries_1 = require("./quaries");
const resolvers_1 = require("./resolvers");
exports.Task = {
    types: types_1.types,
    resolvers: resolvers_1.resolvers,
    quaries: quaries_1.quaries,
    mutations: mutations_1.mutations
};
