// Number

let balance = 100;

console.log(balance); // 100
console.log(typeof balance); // number

let anotherBalance = new Number(120); // object

console.log(anotherBalance); // Number { 120 }
console.log(typeof anotherBalance); // object
console.log(anotherBalance.valueOf()); // 120

// Boolean
let isActive = true;
let isReallyActive = new Boolean(false); // not recommended

// null and undefined 
let empty = null; // empty value
let notDefined = undefined; // has not been defined
// the difference between null and undefined is that null is a value that represents the absence of a value, while undefined is a type that represents the absence of a value.


// String
// Strings are sequences of characters enclosed in single or double quotes.

let myString = 'Hello, World';
let myStringOne = 'Hola'
let username = "John Doe";

let oldGreet = myString + " " + "hitesh"
console.log(oldGreet) // Hello, World!hitesh

// String Interpolation
// String interpolation is a way to construct a new string value by embedding expressions within a string literal.
// we use this rather than oldGreet wiht " "
let greetMessage = `Hitesh $(myString) !`; // here we use backticks
console.log(greetMessage); // Hitesh Hello, World! !

// in $(myString) we can also use any expression like $(2+2) etc.
// we can also use multiline string with backticks

let demoOne = `Value of 2 + 2 is ${2 + 2}`;

// Symbol
// Symbols are a new primitive type in JavaScript introduced in ECMAScript 6.
// A symbol is a unique and immutable data type that is often used to identify object properties.

let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 === sm2); // false
// Symbols are always unique, even if they have the same description.
// this internally creates a unique value for each symbol

