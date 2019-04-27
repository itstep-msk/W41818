var brain = require("brain.js");
var network = new brain.NeuralNetwork();
var result;

network.train([
	{input: [0, 0], output: [0]},
	{input: [0, 1], output: [1]},
	{input: [1, 0], output: [1]},
	{input: [1, 1], output: [0]}
]);

result = network.run([1, 0]);
console.log(result);

/*
false XOR false // false
false XOR true // true
true XOR false // true
true XOR true // false
*/

/*
true OR true // true
false OR true // true
true OR false // true
false OR false // false
*/
