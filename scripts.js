// Objects

// Object Literal Notation
// var dolley = {
//   species: "dog",
//   breed: "golden retriever",
//   alive: false,
//   name: 'dolley'
// };
// console.log(dolley);

// Object Constructor Method
var dolley = new Object();
dolley.species = "dog";
dolley.breed = "golden retriever";
dolley.alive = false;
dolley["cuteness"] = 10;

console.log(dolley);

// Object Constructor Method with Strings, Numbers, and Arrays
// var number = new String(3);
// console.log(number);
// var number = new Number(2);
// console.log(number);
// var array = new Array();
// array.push("pizza");
// console.log(array);

// Deleting
// delete dolley.species;
// console.log(dolley);

// Iterating through Objects
// for (key in dolley) {
//   //   console.log(key);
//   console.log(dolley[key]);
// }
// Native Methods for Iteration
// console.log(Object.keys(dolley));
// console.log(Object.values(dolley));
// console.log(Object.entries(dolley));

// Functions in Objects = Method
// var colleen = {
//   age: 23,
//   favoriteAnimals: ["dog", "cat", "wombat"],
//   sayHello: function () {
//     console.log("HELLO FROM COLLEEN");
//   },
// };

// colleen.sayHello();

// Function Scope and Hoisting

// Declaring variable without var, let, or const makes it global
function getColor() {
  color = "red";
}
getColor();
console.log(color);

// Declaring with var keyword makes it local scope

// function getAnotherColor() {
//   var anotherColor = "green";
// }
// getAnotherColor();
// console.log(anotherColor);
//

// Another example of that:
// var varVariable = "I am globally scoped";
// function functionScopeProof() {
//   var varVariable = "I am locally scoped to this function";
//   console.log(varVariable);
// }
// functionScopeProof();
// console.log(varVariable);

// Hoisting

// functionExpression();
// functionDeclaration();

// Function Expression -- Can only be used after expression
// var functionExpression = function () {
//   console.log("Function expressions can only be used after expression!");
// };
// functionExpression();
// // // Function Declaration -- Hoisted up to global scope right away
// function functionDeclaration() {
//   console.log("Function declarations are hoisted!");
// }

// Context
// This
var colleen = {
  age: 23,
  favoriteAnimals: ["dog", "cat", "wombat"],
  sayHello: function () {
    console.log("HELLO FROM COLLEEN");
  },
  sayFavAnimal: function () {
    console.log("My favorite animal is a " + this.favoriteAnimals[2] + ".");
  },
  sayAge: function () {
    console.log(`My age is ${this.age}.`);
  },
};

colleen.sayHello();
colleen.sayFavAnimal();
colleen.sayAge();
