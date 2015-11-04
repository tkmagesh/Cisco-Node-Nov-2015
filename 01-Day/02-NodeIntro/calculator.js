/*
create a calculator object with the following methods
    * add(x,y)
    * subtract(x,y)
    * multiply(x,y)
    * divide(x,y)

Invoke these methods with some sample data and print the results
*/

var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    }
}

var sciCalculator = {
    sign : function(n){
        if (n < 0) return -1;
        if (n > 0) return 1;
        return 0
    }
}


var result = {
    calculator : calculator,
    sciCalculator: sciCalculator
};
module.exports = result;

/*
module.exports.calculator = calculator;
module.exports.sciCalculator = sciCalculator;
*/

