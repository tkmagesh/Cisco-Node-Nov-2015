/*
sync - sequence
*/

function f1Sync(){
    console.log('f1Sync is invoked');
    console.log('f1Sync is completed');
}
function f2Sync(){
    console.log('f2Sync is invoked');
    console.log('f2Sync is completed');
}
function f3Sync(){
    console.log('f3Sync is invoked');
    console.log('f3Sync is completed');
}
function f4Sync(){
    console.log('f4Sync is invoked');
    console.log('f4Sync is completed');
}

module.exports.runSync = function runSync(){
    f1Sync();
    f2Sync();
    f3Sync();
    f4Sync();
}

function f1(next){
    console.log('f1 is invoked');
    setTimeout(function(){
        console.log('f1 is completed');
        if (typeof next === 'function')
            next();
    },3000);
}
function f2(next){
    console.log('f2 is invoked');
    setTimeout(function(){
        console.log('f2 is completed');
        if (typeof next === 'function')
            next();
    },3000);
}
function f3(next){
    console.log('f3 is invoked');
    setTimeout(function(){
        console.log('f3 is completed');
        if (typeof next === 'function')
            next();
    },3000);
}
function f4(next){
    console.log('f4 is invoked');
    setTimeout(function(){
        console.log('f4 is completed');
        if (typeof next === 'function')
            next();
    },3000);
}
function f5(next){
    console.log('f5 is invoked');
    setTimeout(function(){
        console.log('f5 is completed');
        if (typeof next === 'function')
            next();
    },3000);
}

var fns = [f1, f2, f3, f4, f5];

module.exports.run = function run(){

    function exec(fns){
        var first = fns[0],
            remaining = fns.slice(1),
            next = function(){
                exec(remaining);
            };
        if (typeof first === 'function')
            first(next);
    }
    exec(fns);
    /*f1(function(){
        f2(function(){
            f3(function(){
                f4();
            })
        })
    })*/
}
