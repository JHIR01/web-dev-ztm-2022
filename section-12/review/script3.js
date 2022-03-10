// this is just a cleaner version of 'script2.js'

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// this function will return the length of the input.value
function inputLength() {
    return input.value.length;
}

// This function will create a list item and add it to the ul element
// This will be called in the event functions
function createListElement() {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(input.value));
    ul.appendChild(item);
    input.value = "";
}

// Function to add an item to the list with a click of a button
function addListAfterClick() {
    if(inputLength() > 0){
        createListElement()
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.code === "Enter"){
        createListElement();
    }
}

// here the functions are waiting for the event to be ran
button.addEventListener("click", addListAfterClick); // there is no need for parenthesis

input.addEventListener("keypress", addListAfterKeyPress);