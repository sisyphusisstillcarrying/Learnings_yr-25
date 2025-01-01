function Person(name, age){
   this.name = name;
   this.age = age;

}

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari") // new creates 
// console.log(myNewCar);


function Tea(type){
    this.type;
    this.describe = function (){
        return `this is a cup of ${this.type}`;
    };
}

let lemonTea = new Tea("lemon tea")

// here it is function rather than object so we cannot use prototyping of Objects
AnimationPlaybackEvent.prototype.sound = function (){
    return `${this.species} make a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("Cat");
console.log(cat.sound());



function Drink(name){
    // to check we use new.target
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.name = name;
}
let tea = new Drink("tea");
let coffee = new Drink("coffee");

