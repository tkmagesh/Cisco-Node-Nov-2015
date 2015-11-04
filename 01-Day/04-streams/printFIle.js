var fs = require('fs');

var stream = fs.createReadStream('./sample.txt', {encoding : 'utf8'});
var readCount = 0;
stream.on('data', function(chunk){
    ++readCount;
    console.log(chunk);
});

stream.on('end', function(){
   console.log('Thats all folks');
   console.log('Read performed for ' + readCount + ' times ');
});
