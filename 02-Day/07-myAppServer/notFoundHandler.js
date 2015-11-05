module.exports = function(req, res){
    console.log('[notFoundHandler] - writing 404 response');
    res.statusCode = 404;
    res.end();
}
