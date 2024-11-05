console.log("Hello world");
// this is a single line comment
/* 
    this is a multi line comment
*/

// Variables

//let block scope/ mutable/ changeable
//var global scope/ mutable/ changeable
//const block scope/ immutable/ unchangeable
let firstName = "John";
console.log("My First Name is ", firstName);

var lastName = "Doe";
console.log("My Last Name is ", lastName);

const birthday = "1 - 1 - 1999";
console.log("John Doe's birthday is", birthday);

firstName = " Joshua";
console.log("My name is", firstName);

if (true) {
  var email = "miko@gmail.com";
  let username = "Miko";
  console.log(email, username);
}

username = "brandon";
console.log(username);
console.log(email);
