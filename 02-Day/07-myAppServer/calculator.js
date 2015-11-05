/*
create a calculator object with the following methods
    * add(x,y)
    * subtract(x,y)
    * multiply(x,y)
    * divide(x,y)

Invoke these methods with some sample data and print the results
*/

module.exports = {
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
