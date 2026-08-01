const assert = require("assert");

const fahrenheit = require("./index");

const expected = [32, 68, 86, 104];

assert.deepStrictEqual(
    fahrenheit,
    expected,
    "Incorrect Fahrenheit conversion using map()."
);

console.log("All tests passed!");