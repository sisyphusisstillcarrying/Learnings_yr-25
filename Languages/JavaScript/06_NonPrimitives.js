
const username = {
    firstname: 'John',
    lastname: 'Doe',
    isLogged: true
};
// Object is a non-primitive data type so it takes a reference in memory
// firstname, lastname, isLogged are properties of the object and are primitive data types
// username is not the object itself

// referene is constant, but values are mutable
console.log(username); // { firstname: 'John', lastname: 'Doe', isLogged: true }
console.log(username.firstname); // John
username.firstname = 'Jane';
// values are mutable and can be changed
console.log(username.firstname); // Jane

console.log(username.lastname); // Doe
console.log(username.isLogged); // true

// in some cases dot notation is not possible
const username = {
    "first name": 'John',
    lastname: 'Doe',
    isLogged: true
};
// console.log(username.first name); // SyntaxError: Unexpected identifier
console.log(username["first name"]); // John

let today = new Date();
console.log(today); // 2020-12-19T17:15:21.000Z

// Array
// Array is a non-primitive data type so it takes a reference in memory

let heros = ["hites", 'b', 'c', true, 1, 2, 3];
let anotherUser = ["hitesh", true, [1, 2, 3], { name: 'John' }];

// to access things in array we use index 
// like in object we had keys, in array we have index
// first value needs to be a string

// type conversion
// implicit converstion of JS is not always good
// JS tries to be smart and convert things automatically

console.log(1 + '1'); // 11
console.log('1' + 1); // 11
// if one of the value is string, JS will convert the other value to string

let isValue = true;
console.log(isValue + 1); // 2
// true is converted to 1

let Value = "2abc";
console.log(typeof Number(Value)); // NaN

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('')); // 0
