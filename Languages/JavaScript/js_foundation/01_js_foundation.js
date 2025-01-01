/* 
semi colon is optional in JavaScript
shortcut for console.log is log
*/
// 1. priting the data
console.log("Hello World!");
process.stdout.write("Hello World!");

// we have many type of console. methods
console.log("Hello World!");
console.info("Hello World!");

console.error("Hello World!");
console.table({city: "Jaipur"});
console.warn({ city: "Jaipur"});


// 2. variables constants and data types

/*

Datatypes -:

String
Number
Boolean
BigInt

Undefined
null

Object

Symbol

*/ 

// variable is like a placeholder for storing the data. var is used to declare the variable
// old way of doing it
var name = "John";
var score = 102;

// new way of doing it
let name = "John"; //string
let score = 102; //number
let isPresent = true; //boolean
let bigInt = 1234567890123456789012345678901234567890n; //bigint
let age = undefined; //undefined means no value is defined yet
let city = null; //null means no value

// object is a collection of key value pairs here are two ways to write object
// javascript is very object oriented language
let person = {
    name: "John",
    age: 30
};
let fruits = ["apple", "banana", "mango"];
let date = new Date();


// we can also take value from another variable
let getScore = score;
console.log(getScore);


// changing the value of variable

let name = "Batman";

name = "Doe";

// constant is a variable whose value cannot be changed
const name = "John";
name = "Doe"; // this will give error
// constant is more used than variable or let




