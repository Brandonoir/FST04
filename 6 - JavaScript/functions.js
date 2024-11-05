//Function
// A function is a block of code that can be executed multiple times from different parts of the program.

function greet() {
    console.log("Hello, Welcome to the World of functions.");
  }
  
  greet();
  
  function sum(num1, num2) {
    console.log("We have used the paremeters for addition");
    return num1 + num2;
  }
  
  function dif(num1, num2) {
    console.log("We have used the paremeters for subtraction");
    return num1 - num2;
  }
  
  function prod(num1, num2) {
    console.log("We have used the paremeters for multiplication");
    return num1 * num2;
  }
  
  function quo(num1, num2) {
    console.log("We have used the paremeters for division");
    return num1 / num2;
  }
  
  console.log(sum(5, 10));
  console.log(dif(10, 5));
  console.log(prod(5, 10));
  console.log(quo(10, 5));
  