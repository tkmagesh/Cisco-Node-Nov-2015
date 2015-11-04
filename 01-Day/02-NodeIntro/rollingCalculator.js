/*
calculator
    * add(n)
    * subtract(n)
    * multiply(n)
    * divide(n)
    * getResult()
    *

usage (rollingCalculatorClient.js)
calculator.add(100)
calculator.subtract(50)
calculator.multiply(4)
calculator.divide(2)
calculator.getResult() //=> 100
*/

console.log('calculator factory is being loaded');
module.exports = function(){
    var result = 0;
    return {
        add : function(n){
            result += n;
        },
        subtract : function(n){
            result -= n;
        },
        multiply : function(n){
            result *= n;
        },
        divide : function(n){
            result /= n;
        },
        getResult : function(){
            return result;
        }
    };
};
