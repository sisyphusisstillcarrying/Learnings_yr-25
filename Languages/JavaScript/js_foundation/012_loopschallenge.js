

// // Write a while loop that counts from 5 to 1 and stores it in an array named `countDown`.

// let countdown = [];
// let i = 5;
// while(i > 0){
//     countdown.push(i);
//     i--;
// }
// // for(let i = 5; i > 0; i--){
// //     countdown.push(i);
// // }
// console.log(countdown);

// // write a dowhile loop that prompts the user to enter their favorite city and stores it in an array named `favoriteCities`.
// // do this until they enter stop

// let favoriteCities = [];
// let i;
// do{
//     i = prompt("Enter your favorite city");
//     // prompt returns null if user clicks cancel
//     // what is prompt ? prompt is a function that displays a dialog box that prompts the visitor for input
//     // nodejs does not have prompt function
//     // because prompt is a browser function
//     // it is not a part of javascript
//     if(i !== "stop"){
//         // !== is not equal to
//         // != means not equal to
//         // difference between !== and != is that !== also checks the type of the variable
//         favoriteCities.push(i);
//     }
// }while (i !== "stop");


// write do wile loop that adds number from 1 to 3 and adds result to an variable named total.

// let total = 0;
// let j = 1;
// do{
//     total += j;
//     j++;
// }while(j <= 3);

// write a for loop that multiples each number in an array named `numbers` by 2 and stores the results in a new array named `doubledNumbers`.
let multipleof2 = [];
let arr = [2, 4, 6, 8];

for(let i = 0; i < arr.length; i++){
    // num = arr[i] * 2;
    // multipleof2.push(num);
    multipleof2.push(arr[i] * 2);
}
console.log(multipleof2);

// write a for loop that lists all citites in the array '[Paris, London, Tokyo]' and store them in a new array named cityList.

let cities = ["Paris", "London", "Tokyo"];
let cityList = [];

for(let i = 0; i < cities.length; i++){
    cityList.push(cities[i]);
}
console.log(cityList);