// Arithmetic operations
let num1 = 5;
let num2 = 10;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num2 - num1);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num2 / num1);
console.log("Remainder/Modulo (%):", num1 % num2);
console.log("exponent (**):", num2 ** num1);

//Arithmetic Order
//PEMDAS:  Parentheses, Exponents, Multiplication and Division, Addition and Subtraction

let result = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("This is the result of PEMDAS :", result);

//Concatenation

let greet = "Hi!";
let myName = "Brandon";

console.log(greet + " " + myName + "I am your instructor for today");

//Comparison Operators
//returns boolean result

//Equal
console.log("Equal (==)", 5 == 5);

//Not Equal
console.log("Not Equal (!=)", 5 != 4);

//Identical or strictly equal
console.log("Strictly Equal (===)", "5" === 5);

//Not Identical or strictly not equal
console.log("Strictly Not Equal (!==)", "5" !== 4);

//Greater than and Less than comparison operators
//Greater Than
console.log("Greater Than (>)", 5 > 4);
//Less Than
console.log("Less Than (<)", 5 < 4);
//Greater Than or Equals to
console.log("Greater Than or Equals to (>=)", 5 >= 4);
//Less Than or Equals to
console.log("Less Than or Equals to (<=)", 5 <= 4);

//Logical Operators
//returns a boolean value

let sunny = true;
let warm = false;

//AND
console.log("Is it sunny and warm?", sunny && warm);
//OR
console.log("Is it sunny or warm?", sunny || warm);
//NOT
console.log("it is not sunny.", !sunny);

//Assignment Operation

let num3 = 10;
let num4 = 5;

// Assignment Addition
num3 += num4;
console.log("The new value of num 3: ", num3);

//Assignment Subtration
num3 -= num4;
console.log("The new value of num 3: ", num3);

//Assignment Multiplication
num4 *= num3;
console.log("The new value of num 4: ", num4);

//Assignment Division
num3 /= num4;
console.log("The new value of num 3: ", num3);

//Assignment Modulo
num4 %= num3;
console.log("The new value of num 4: ", num4);

//Assignment Exponent
num4 **= num3;
console.log("The new value of num 4: ", num4);
