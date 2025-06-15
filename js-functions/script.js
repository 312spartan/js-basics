// function greet () {
//     console.log("Hey there! Welcome to JavaScript!");
// }

// greet(); // this is where the function is called, which makes the function execute

// function greetUser(name) {
//     console.log(`Hello, ${name}`);
// }

// greetUser("Jake"); // This will not run unless the function is called here.

// function addNumbers(num1, num2) {
//     console.log(`Sum: ${num1 + num2}`);
// }

// addNumbers(85, 32) // Output 117
// addNumbers(459, 10) // Output 469

// const greet = function(name) {
//     return `Hey, ${name}!`;
// }

// console.log(greet("Axel"));


// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply)


// Arrow functions are shorter syntax. modern way to write a function

// const square = (num) => num ** 2;

// console.log(square(14));

// const multiply = (a, b) => a * b; // you only need curly braces if multiple lines are being used or if the function requires multiple lines.

// console.log(multiply(4, 5));

// Function scope and hoisting

// let globalVar = "I am global";

// function testScope() {
//     let localVar = "I exist only here in this function"
//     console.log(globalVar); // works
//     console.log(localVar); // works
// }

// testScope()
// console.log(globalVar); // works
// console.log(localVar); // Error

// without the curly braces, localVar does not exist inside of testScope.

// hello();

// function hello() {
//     console.log("Hello from a function declaration.");
// }


// greet(); // Functions written this way cannot be hoisted, the function has to be called under the code


// const greet = function () {
//     console.log("HELLO FROM A FUNCTION EXPRESSION");
// }; 

