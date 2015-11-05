var qs = require('querystring'),
    calculator = require('./calculator');

module.exports = function(req, res){
    var urlObj = req.url;
    if (urlObj.pathname === '/calculator' && req.method==='GET'){
        var n1 = parseInt(urlObj.query.n1, 10),
            n2 = parseInt(urlObj.query.n2, 10),
            operation = urlObj.query.operation;
        var result = calculator[operation](n1, n2);
        res.write(result.toString());
        res.end();
    } else if (urlObj.pathname === '/calculator' && req.method==='POST'){
        var n1 = parseInt(req.body.n1, 10),
            n2 = parseInt(req.body.n2, 10),
            operation = req.body.operation;
        var result = calculator[operation](n1, n2);
        res.write(result.toString());
        res.end();
    }
};
