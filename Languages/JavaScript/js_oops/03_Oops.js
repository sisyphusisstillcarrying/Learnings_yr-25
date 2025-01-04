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

    start: function () {
        return `$(this.make) car got started in $(this.year)`;
    },
};
// console.log(car.start());

// problem is we cannot copies bt we can use constructor for that

function Person(name, age) {
    this.name = name;
    this.age = age;

}
let john = new Person("John Doe", 20);
// console.log(john.name);

// prototype and prototya chain

function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function () {
    return `${this.type} make a sound`
}

Array.prototype.hitesh = function () {
    return `Custom method ${this}`
}

let myArray = [1, 2, 3];
console.log(myArray.hitesh());


// creating class 

// when functions are inside class we switch the termenology and start calling them methods. 
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
// console.log(vehOne.make);

// Encapsulation means hiding the internal state of an object and requiring all interaction to be performed through an object's methods.

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction means hiding the complex implementation details and only showing the necessary features of an object.

class CoffeMachine {
    start() {
        // call DB
        // filter value
        return `Starting the machine...`;
    }
    brewCoffee() {
        // complex calculation
        return `Brewing coffee`;
    }

    pressStartButton() {
        let msgone = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgone} + ${msgTwo}`;
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism means the ability to present the same interface for different data types.

class Bird {
    fly() {
        return `Flying....`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`;
        // here the fly method is overriden for penguin
    }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

// static method means the method which is not dependent on the instance of the class and can be called directly on the class.

class Calculator {
    static add(a, b) {
        return a + b;
    }
    // this add method is not dependent on the instance of the class therefore cannot be called on the instance of the class.
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

// console.log(Calculator.add(2, 3));

// Getters means the method that gets the value of a property.
// and setters means the method that sets the value of a property.

class Employee {
    #salary;
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary cannot be in negative");
        }
        this.name = name;
        this.#salary = salary;
        // previously we were using this._salary = salary
        // # is used to make the property private
    }

    get salary() {
        // this salary is defined as getter
        return `You are not allowed to see salary`;
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invalid Salary");
        } else {
            this._salary = value;
            // _ is used to make the property protected
        }
    }

    // ques: explain the whole method functuonality of the class Employee
    // ans: it is a class that takes name and salary as input and if salary is negative it throws an error. It has a getter and setter for salary property. Getter returns a message that you are not allowed to see salary and setter checks if the salary is negative and if it is then it logs an error otherwise it sets the salary to the value passed.
}

let emp = new Employee("Alice", -50000);
console.log(emp._salary);
emp.salary = 60000;
