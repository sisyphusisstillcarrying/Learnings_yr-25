// abilty to create objects 
// we can do this using functional constructors as well

// Encapsulation Inheritance
// Polymorphism and Abstraction(next js file)

/*
Encapsulation in JavaScript is a concept where the internal state of an object is hidden from the outside world and can only be accessed or modified through a well-defined interface. This is typically achieved using closures or ES6 classes with private fields and methods.
*/

// in JS everything is object 
// we declare objet literal

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,

    start: function(){
        return `$(this.make) car got started in $(this.year)`;
    },
};
// console.log(car.start());

// problem is we cannot copies bt we can use constructor for that

function Person(name, age){
    this.name = name;
    this.age = age;
 
}
let john = new Person("John Doe", 20);
// console.log(john.name);

// prototype and prototya chain

function Animal(type){
   this.type = type; 
}

Animal.prototype.speak = function(){
    return `${this.type} make a sound`
}

Array.prototype.hitesh = function(){
    return `Custom method ${this}`
}

let myArray = [1, 2, 3];
console.log(myArray.hitesh());


// creating class 
class Vehicle{
    // when functions are inside class we switch the termenology and start calling them methods. 
}

