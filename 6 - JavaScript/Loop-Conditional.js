// Conditional Statements
// Conditional statements are used to execute different blocks of code based on certain conditions.

let temperature = 25;

//IF conditional statement
// returns a boolean value
if (temperature > 0) {
  console.log("It's Freezing!");
} else if (temperature <= 0) {
  console.log("It's cold outside!");
} else if (temperature >= 0 && temperature == 25) {
  console.log("It's cloudy outside!");
} else {
  console.log("It is a hot weather outside.");
}

//Loop Statements
// Loop statements are used to execute a block of code repeatedly for a specified number of times.

// 1st : initialization of base variable
//2nd : Conditional Expression
//3rd : Increment/Decrement expression
for (let i = 0; i <= 3; i++) {
  console.log("For Loop: ", i);
}
