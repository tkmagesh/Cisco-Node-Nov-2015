var http = require('http'),
    dataParser = require('./dataParser'),
    staticServer = require('./staticServer'),
    calculatorProcessor = require('./calculatorProcessor'),
    notFoundHandler = require('./notFoundHandler'),
    path = require('path'),
    app = require('./app');


app.use(dataParser);
app.use(staticServer(path.join(__dirname, './public')));
app.use(calculatorProcessor);
app.use(notFoundHandler);

http.createServer(app).listen(8080);
console.log('server listening on port 8080!');
