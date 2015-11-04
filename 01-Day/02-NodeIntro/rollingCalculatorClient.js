var calculator = require('./rollingCalculator');
calculator.add(100)
calculator.subtract(50)
calculator.multiply(4)
calculator.divide(2)
console.log(calculator.getResult()); //=> 100
