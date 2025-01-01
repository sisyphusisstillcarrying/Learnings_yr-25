// condition challenges

// check if a number is greater than other number
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
    }else{
        console.log(`${num1} is not greater than ${num2}`);
    }

// check if a sting is equal to other string

let username = "hello";
let anotherUsername = "hello";

// = is assingment operator and == is comparison operator
if (username == anotherUsername) {
    console.log("choose another username");
    }else{
        console.log(`${str1} is not equal to ${str2}`);
    }

// cheaking if a variable is a number or not

let socre = 44
let score = "44"
let arr = [1,2,3,4,5]
// === is strict comparison operator that means
// it will check the type and value of the variable
if (typeof socre === "number") {
    console.log("This is a number");
    }
if (typeof score === "string") {
    console.log("This is a string");
    }

if(typeof arr === "array"){
    console.log("This is an array");
    }
// it is tricky to check for array because array is an object
// so we can use Array.isArray() method to check if a variable is an array or not


// Cheaking for boolean

let isReady = true;
let isFalse = false;

if (isReady) {
    console.log("This is true");
    }else{
        console.log("This is false");
    }
if (isFalse) {
    console.log("This is true");
    }else{
        console.log("This is false");
    }


    // Checking if an array is empty or not

    let items = []
// we will study array sepearately as it is a complex data type
    if(items.length == 0) {
        console.log("This is empty");
    }else{
        console.log("This is not empty");
        }