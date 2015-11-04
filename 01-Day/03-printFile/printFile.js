var fs = require('fs');

/* Sync */
/*
try{
    var fileContents =  fs.readFileSync('./sample.txt', {encoding : 'utf8'});
    console.log(fileContents);
} catch (e){
    console.log("something went wrong!");
}*/

/* Async */

fs.readFile('./sample.txt', {encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log("something went wrong!");
        return;
    }
    console.log(fileContents);
});
console.log("Job done");

