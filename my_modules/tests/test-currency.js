var currency = require('./currency');

console.log('50 Canadian dollars is equivalent to: ' + currency.canadianToUS(50) + ' USD');
console.log('50 USD is equivalent to: ' + currency.USToCanadian(50) + ' Canadian dollars');