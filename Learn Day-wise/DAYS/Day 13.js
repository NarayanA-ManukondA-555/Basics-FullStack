// Conditionals:

// if else
var num1=20;
var num2=50;
if (num1>num2) {
  console.log("1st number is greater");
}
else {
  console.log("2nd number is greater");
}

// if else if
var a=0;
 if (a>0) {
   console.log("'a' is positive");
 }
 else if (a<0) {
   console.log("'a' is negative");
 }
 else {
   console.log("'a' is zero");
 }

// if ladder
var a=-5;
if (a>0) {
  console.log("'a' is positive");
}
if (a<0) {
  console.log("'a' is negative");
}
if (a<=0) {
  console.log("'a' is negative or zero");
}

// Nested if else
var a=-10;
if (a>=0) {
  if (a>0) {
    console.log("'a' is +ve");
  }
  else {
    console.log("'a' is zero");
  }
}
else {
  console.log("'a' is -ve");
}

// switch
var a=25;
var b=49;
switch (a>b) {
  case true:
    console.log("This is from 1st case");
    break;
  case false:
    console.log("This is from 2nd case");
    break;
default:
  console.log("Nothing");
}

/*Operators

Arthmetic Operators:
4+5=9;
8-7=1;
9*3=27;
8/2=4;
8%2=0;

Assisgnment Operators:
a=a+b or a+=b;
a=a-b or a-=b;
a=a*b or a*=b;
a=a/b or a/=b;

Comparision Operators:
== (compare the values only)
===(compare values & data type)
*/

var a="5";
var b=5;
if (a===b) {
  console.log("Both are exactly same");
}
else {
  console.log("Both are exactly not same");
}

var a="5";
var b=5;
if (a==b) {
  console.log("Both are same");
}
else {
  console.log("Both are not same");
}

// Logical Operators

// AND Operator  &&
var a=0;
if (a===0&&a>0) {
  console.log("a is +ve");
}
else {
  console.log("nothing");
}

var a=58;
if (a!=0&&a>0) {
  console.log("a is +ve");
}
else {
  console.log("nothing");
}

// OR logical operator:
var a=-5;
if (a=0||a>0) {
  console.log("a is +ve");
}
else {
  console.log("nothing");
}

/*NOT logical operator: a=0 then  !a=+ve or true
  a!=0 (means a=+ve or -ve) then !a=-ve or false
*/
var a=-7;
if (!a) {
  console.log("a is +ve");
}
else {
  console.log("nothing");
}

// Ternary operator:
const mymarks=49;
mymarks>18 ? console.log("passed") : console.log("failed");

// Increament
var a=0;
var b=0;
var c=0;
b=++a;
c=a++;
console.log({a,b,c});

// Decrement
var a=2;
var b=0;
var c=2;
b=a--;
c=--a;
console.log({a,b,c});

// Loops

// for loop
for (var i = 0; i <= 100; i++) {
  if (i%2===0)
  console.log(i);
}

// while loop
var i = 0;
while (i <= 100) {
  if (i%10===0) {
  console.log(i);
  }
  i++;
}

// do while Loop
var i=0;
do {
  if(i%5===0){
    console.log(i);
  }
  i++;
} while (i<=100);

// while
var a=0;
while(a>0){
  console.log("Hello");
}

// do while
var a=0;
do {
  console.log("Hello");
} while(a>0);
