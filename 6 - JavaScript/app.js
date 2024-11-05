//Arrays
// Arrays are a collection of elements of the same data type stored in contiguous memory locations. They are used to store.

let fruits = [
  "Banana",
  "Apple",
  "Pear",
  "Orange",
  "Passionfruit",
  "Mango",
  "Grape",
  "Kiwi",
  "Watermelon",
  "Dragon Fruit",
];

console.log("The fruits available are: ", fruits);
//array length: .length
console.log("Number of Fruits: ", fruits.length);
//accessing array index
console.log("First fruit is: ", fruits[0]);
console.log("Last fruit is: ", fruits[fruits.length - 1]);

//Adding element to the array
//.push method
fruits.push("Pineapple");
console.log("Updated Fruits list: ", fruits);
console.log("Last fruit is: ", fruits[fruits.length - 1]);

//Deleting element from the array
//.pop method
fruits.pop();
console.log("Updated Fruits list: ", fruits);
console.log("Last fruit is: ", fruits[fruits.length - 1]);

//Searching element from the array
//.includes method
console.log("Is Mango available? ", fruits.includes("Mango"));

//Looping in the array
//foreach
fruits.forEach(function (fruit) {
  console.log("Fruit", fruits.indexOf(fruit) + 1 + ": " + fruit);
});
