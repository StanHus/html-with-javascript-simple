// create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Hi there and greetings!");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
let existingDiv = document.getElementById("my-target-element");
document.body.appendChild(newDiv, existingDiv);

// create a new div element
const newEl = document.createElement("Element");

// and give it some content
const newElCont = document.createTextNode("I guess this does things");

// add the text node to the newly created div
newEl.appendChild(newElCont);

// add the newly created element and its content into the DOM
existingDiv = document.getElementById("my-target-element");
document.body.appendChild(newEl, existingDiv);