// it is a prototype language
// JavaScript is a prototype-based programming language, meaning that it uses prototypes to share properties and methods between objects:

// creating an object 
let computer = {cpu: 12};
let lenovo = {
    screen: "HD",
    __proto__: computer,

};
let tomHardware = {};

// console.log(`computer`, computer.__proto__);
// console.log(`computer`, lenovo.__proto__);
// .__ is called dunder prototype

let genericCar = {types: 4}

let tesla = {
    driver: "AI"
}
// differet and better approach to do prototying without writing it straight in the function. 


Object.setPrototypeOf(tesla, genericCar)

console.log(`tesla`, Object.getPrototypeOf(tesla));



