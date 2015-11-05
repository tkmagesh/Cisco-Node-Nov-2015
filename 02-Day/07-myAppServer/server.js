var http = require('http'),
    dataParser = require('./dataParser'),
    staticServer = require('./staticServer'),
    calculatorProcessor = require('./calculatorProcessor'),
    notFoundHandler = require('./notFoundHandler');

var server = http.createServer(function(req, res){
    dataParser(req, res);
    staticServer(req, res);
    calculatorProcessor(req, res);
    notFoundHandler(req, res);
});

server.listen(8080);
console.log('server listening on port 8080!');
