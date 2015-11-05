var path = require('path'),
    fs = require('fs');


var staticExtns = ['.html','.js','.css','.txt','.jpg','.png','.json','.xml'];
function isStatic(resource){
    return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(resourcePath){
    return function(req, res, next){
        var urlObj = req.url;
        if (isStatic(urlObj.pathname)){
            var resource = path.join(resourcePath, urlObj.pathname);
            if (!fs.existsSync(resource)){
                res.statusCode = 404;
                res.end();
                return;
            }
            fs.createReadStream(resource).pipe(res);
        } else {
            next();
        }
    }
};
