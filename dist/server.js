"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var resolvers_1 = __importDefault(require("./resolvers/resolvers"));
var schema_1 = __importDefault(require("./schema/schema"));
var server = new apollo_server_1.ApolloServer({
    resolvers: resolvers_1.default,
    typeDefs: schema_1.default
});
server.listen()
    .then(function (serverInfo) { return console.log("Server ready at " + serverInfo.url); });
