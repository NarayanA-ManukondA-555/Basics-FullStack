// JS Functions

// const items = {
//   food: 1000,
//   drinks: 2000
// };

// var cart = 0;
// function addToCart() {
//   cart += items.food;
// }
// addToCart();
// addToCart();
// console.log("cart:",cart);
//
// var cart = 0;
// function addToCart(parameter) { //parameter
//   cart += items.food;
// }
// addToCart(items.food);  //argument
// addToCart(items.drinks); //argument
// console.log("cart:",cart);

// var cart = 0;
// console.log("cart:",cart);

// cart = 0;
// function addToCart(parameter) { //parameter
//   cart += parameter;
// }
// addToCart(items.food);  //argument
// addToCart(items.drinks); //argument
// console.log("cart:",cart);
// var cart;

// cart = 0;
// function addToCart(item) {
//   return cart+item;
// }
// function addCartValue(item) {
//   cart=addToCart(item);
// }
// addCartValue(items.food);
// console.log("cart:",cart);
// var cart;

// Arrow Function used in new version of JS ES6
// cart = 0;
// var addToCart = (item) => {
//   return cart+item;
// };
// var addCartValue = (item) => {
//   cart=addToCart(item);
// }
// addCartValue(items.food);
// console.log("cart:",cart);
// var cart;

// Normal function
// myfunction(); //Hoisting
// function myfunction() {
//   console.log("Hello World!");
// }

// Arrow Function used in new version of JS ES6
// const myfunction = () => console.log("Hello World!");
// myfunction();

// this
// console.log(this);

// function getThis() {
//   console.log(this);
// }
// getThis();
//
// const arrowGetThis = () => console.log(this);
// arrowGetThis();

// Normal function is more preferable
// const ourObject = {
//   name: "this keyword",
//   getThis: function () {
//     console.log(this);
//   }
// };
// ourObject.getThis();

// Arrow function for this keyword always gives window as current executing object insted of parent object
// const ourObject = {
//   name: "this keyword",
//   getThis: () => {
//     console.log(this);
//   }
// };
// ourObject.getThis();

// Arrays
// var myArray = [1,2,3,4,5,6];
// console.log(myArray);
// myArray.push(7);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift(0);
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// Recursive function: When we call a function inside a function is called recursive function
var num = 1;
function printNum() {
  console.log(num);
  num++;
  if (num<=10) {
    printNum();
  }
  else {
        console.log("Hello");
    return ;
  }
}
printNum();
