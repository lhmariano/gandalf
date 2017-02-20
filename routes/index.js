'use strict'

server.get({
    path: '/:name',
    version: '0.1.0'
}, function(req, res, next) {
    res.send(req.params.name + ' YOU SHALL NO PASS!!!');
    next();
})
