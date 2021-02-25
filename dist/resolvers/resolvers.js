"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chuck_noris_service_1 = require("../services/chuck.noris.service");
var chuckNorisApi = new chuck_noris_service_1.ChuckNorisApi();
exports.default = {
    Query: {
        catagories: function () { return chuckNorisApi.getCatagories(); },
        randomJoke: function (parent, args, context, info) {
            return chuckNorisApi.getRandomJoke(args.catagory);
        }
    },
};
