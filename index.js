const celsius = [0, 20, 30, 40];

let fahrenheit = celsius.map(temp => (temp *9/5)+32);
// TODO:
// Convert the Celsius temperatures to Fahrenheit
console.log(`celsius:${celsius}\n farenheit:${fahrenheit}`);
// Formula: (C × 9/5) + 32
// Use the map() function and store the result in fahrenheit.

// Write your code below


// Do not modify this line
module.exports = fahrenheit;
