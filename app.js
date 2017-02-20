'use strict'

var restify = require('restify');
var versioning = require('restify-url-semver');
var config = require("./config/");

global.server = restify.createServer({
    name: "gandalf"
})

server.use(restify.jsonBodyParser({
    mapParams: true
}))

server.use(restify.acceptParser(server.acceptable))

server.use(restify.queryParser({
    mapParams: true
}))

server.use(restify.fullResponse())

server.pre(versioning({
    prefix: '/api'
}));

server.listen(config.application.port, function() {
    console.log('%s listening at %s', server.name, server.url);
    require('./routes');
});
