var url = require('url');
module.exports = function(req, res){
    req.url = url.parse(req.url, true);
    req.body = {};
    if (req.method === 'POST'){
        var reqData = '';
        req.on('data', function(chunk){
            reqData += chunk;
        });
        req.on('end', function(){
            req.body = qs.parse(reqData);
        });
    }
}
