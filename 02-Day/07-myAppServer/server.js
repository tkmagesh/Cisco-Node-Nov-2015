var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    qs = require('querystring'),
    calculator = require('./calculator');

var staticExtns = ['.html','.js','.css','.txt','.jpg','.png','.json','.xml'];
function isStatic(resource){
    return staticExtns.indexOf(path.extname(resource)) !== -1;
}
var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url, true);
    if (isStatic(urlObj.pathname)){
        var resource = path.join(__dirname, urlObj.pathname);
        if (!fs.existsSync(resource)){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(resource).pipe(res);
    } else if (urlObj.pathname === '/calculator' && req.method==='GET'){
        var n1 = parseInt(urlObj.query.n1, 10),
            n2 = parseInt(urlObj.query.n2, 10),
            operation = urlObj.query.operation;
        var result = calculator[operation](n1, n2);
        /*fs.readFile(path.join(__dirname, './calculator.html'),{encoding :'utf8'}, function(err, contents){
            var responseContent = contents.replace("{{n1}}", n1).replace("{{n2}}", n2).replace("{{result}}", result);
            res.write(responseContent);
            res.end();
        });*/
        res.write(result.toString());
        res.end();
    } else if (urlObj.pathname === '/calculator' && req.method==='POST'){
        var reqData = '';
        req.on('data', function(chunk){
            reqData += chunk;
        });
        req.on('end', function(){
            var data = qs.parse(reqData);
            var n1 = parseInt(data.n1, 10),
                n2 = parseInt(data.n2, 10),
                operation = data.operation;
            var result = calculator[operation](n1, n2);

            res.write(result.toString());
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(8080);
console.log('server listening on port 8080!');
