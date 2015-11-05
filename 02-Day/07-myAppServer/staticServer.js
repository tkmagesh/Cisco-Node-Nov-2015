var path = require('path'),
    fs = require('fs');


var staticExtns = ['.html','.js','.css','.txt','.jpg','.png','.json','.xml'];
function isStatic(resource){
    return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
    var urlObj = req.url;
    if (isStatic(urlObj.pathname)){
        var resource = path.join(__dirname, urlObj.pathname);
        if (!fs.existsSync(resource)){
            res.statusCode = 404;
            res.end();
            return;
        }
        /*fs.createReadStream(resource).pipe(res);*/
        var stream = fs.createReadStream(resource);
        stream.on('data', function(chunk){
            console.log('[staticServer] - writing data to response stream');
            res.write(chunk);
        });
        stream.on('end', function(){
            console.log('[staticServer] - finished writing data to response stream');
            res.end();
        });
    }
}
