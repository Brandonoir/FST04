//DOM: Document Object Model
//DOM is a tree-like structure that represents the structure of an HTML document

//get elements by Id
let elementWithId = document.getElementById("first-div");
console.log(elementWithId);
elementWithId.textContent = "Div 1";

//get elements by class name
const elementWithClass = document.getElementsByClassName("sample-div");
console.log(elementWithClass);
elementWithClass[1].textContent = "Div 2";

//get elements by tag name
let listItems = document.getElementsByTagName("li");
console.log(listItems);
listItems[0].style.color = "burlywood";

//query selector

//by class
let orderList = document.querySelector(".ordered-list");
console.log(orderList);
orderList.style.backgroundColor = "burlywood";

//all
const headings = document.querySelectorAll("h3");
console.log(headings);
headings.forEach(function (heading) {
  heading.style.backgroundColor = "blue";
  heading.style.color = "white";
});

//changing an image variable
const day = document.getElementById("day-night-icon");
day.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

//Creating a child element
const parent = document.querySelector("#parent-element");
const child = document.createElement("div");
child.textContent = "Child Element";
parent.appendChild(child);

//Removing an Element
const removed = document.getElementById("element-to-be-removed");
removed.remove();

// let dark = document.querySelector("#dark-mode-btn");
// dark.addEventListener("click", function () {
//   const page = document.getElementById("page-container");
//   page.style.backgroundColor = "black";
//   page.style.color = "white";
//   let text = document.getElementById("page-mode-text");
//   text.textContent = "Dark Mode";
// });

let modeBtn = document.querySelector("#dark-mode-btn");
modeBtn.addEventListener("click", function () {
  let pageContainer = document.getElementById("page-container");
  let pageText = document.getElementById("page-mode-text");

  if (modeBtn.textContent == "Dark Mode") {
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    pageText.textContent = "Dark Mode";
    modeBtn.textContent = "Light Mode";
  } else {
        pageContainer.style.backgroundColor = "white";
        pageContainer.style.color = "black";
        pageText.textContent = "Light Mode";
        modeBtn.textContent = "Dark Mode";
  }
});
