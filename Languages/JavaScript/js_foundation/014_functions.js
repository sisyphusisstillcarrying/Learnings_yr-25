/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
// funtion
function makeTea(typeOfTea){
  return `Making $(typeOfTea) tea`;
  // after return anything written will note execute
}

let teaOrder = makeTea("green");
// console.log(teaOrder);

  /* 
  2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
  Call `confirmOrder` from within `orderTea` and return the result.
  */
// function within functions
  function orderTea(teaType) {
    function confirmOrder() {
      return `Order confirmed for chai`;
    }
    return confirmOrder();
  }
  //https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/
  let orderConfirmation = orderTea("chai");
  // console.log(orderConfirmation);
  
  /* 
  3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
  Store the result in a variable named `totalCost`.
  */
  // arrow function
  // function greet (){} -> normal function
  // const greet = () => {} -> arrow function

  const calculateTotal = (price, quantity) => price * quantity; // we dont need {} as there is only one line of execution so this translate as { return price * quantity} without techincally using return
  // context arrow function gets read about it*
  // 
  let totalCost = calculateTotal(499 * 100);
  
  /* 
  4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
  Return the result of calling `makeTea`.
  */
  function makeTea(typeOfTea) {
    return `maketea: ${typeOfTea}`;
  }
  
  function processTeaOrder(teaFunction) {
    // we cannot use a function directly as a placeholder so we use teaFunction or fn whatever you wnat and later declare the processTeaOrder makeTea function
    return teaFunction("earl grey");
  }
  // Higer Order Function or First Class function read about it explains about the parameter and placeholder. any function that takes a function as a parameter or returns a function is a higher order function  like for each 
  let order = processTeaOrder(makeTea);
  // console.log(order);
  
  /* 
  5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
  Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
  */
  
  function createTeaMaker(name) {
      let score = 100
    return function (teaType) {
      return `Making ${teaType} ${name} ${score}`;
    };
  }
  
  let teaMaker = createTeaMaker("hitesh");
  let result = teaMaker("green tea");
  console.log(result);
  // closures**