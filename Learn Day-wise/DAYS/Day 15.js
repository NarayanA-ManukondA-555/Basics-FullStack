// const myArray=[1,2,3,4,5];
// myArray[0];

// // Destructuring
// function getArray() {
//   return [1,2];
// }
//
// const [x,y,z]=getArray();
// // [x,y,z]=[1,2]
// console.log(x);
// console.log(y);
// console.log(z);

// // Map
// var myArray=[1,2,3];
// const newArray=myArray.map((e) => (e+1));
// console.log(newArray);

// // Filter
// var myArray=[10,20,50];
// const newArray=myArray.filter(e => e<50);
// console.log(newArray);

// function hello(name) {
//   console.log("Hello "+name);
// }
// hello();

// function hello(name) {
//   if (name) {
//     console.log("Hello "+name);
//   }
//   else {
//     console.log("Hello World");
//   }
// }
// hello("Narayana");

// function hello(name="World") {
//     console.log("Hello "+name);
//   }
// hello();
//
// function hello(name="World") {
//     console.log("Hello "+name);
//   }
// hello("Narayana");

// // Template Literals
// console.log("Apples\nBananas Oranges\nMangoes");
// console.log("----------------------------------");
// console.log(`
// Apples
// Bananas Oranges
// Mangoes
//   `);

// Scoping
// function outer() {
//   var name1="xyz";
//   let name2="pqr";
//   function inner() {
//     var name1="xxyyzz";
//     console.log(name1);
//   }
//   inner();
//   console.log(name1);
// }
// outer();

// function outer() {
//   var name1="xyz";
//   let name2="pqr";
//   function inner() {
//     let name2="ppqqrr";
//     console.log(name2);
//   }
//   inner();
//   console.log(name2);
// }
// outer();

// Promises
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((result) => result.json())
// .then((data) => console.log(data));
//
// console.log("----------------------------");

// async function getData() {
//
// }

const getData = async() => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  console.log(data);
};
getData();
