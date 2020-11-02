const assertEqual = require("../assertEqual");
const tail = require("../tail");

const sentence = ['hey', 'hey', 'youse', 'guyses'];
console.log(tail(sentence));
assertEqual(sentence.length, 4);
console.log(tail([]));
console.log(tail([14]));
