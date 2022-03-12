// referenced items from html
var addBut = document.getElementById("enter-button");
var input = document.getElementById("userinput");
// 'querySelector' grabs the item and all the items in it
var list = document.querySelector("ul");
var delBut = document.getElementById("delButton");

// function to get the length of the item in the input box
function inputLength() {
    return input.value.length;
}

// function to create a new item for the list
function createListElement() {
    var tempItem = document.createElement("div");
    var itemE = document.createElement("li");
    var delB = document.createElement("button");
    list.appendChild(tempItem);
    tempItem.append(itemE, delB);
    itemE.appendChild(document.createTextNode(input.value));
    input.value = "";
    // delB.classList.add("delButton");
    delB.innerHTML="Del";
}

// function to add an item to the list after clicking the 'Enter' button
function addListAfterClick() {
    if (inputLength() > 0){
        createListElement();
    }
}

// function to add an item after pressing the 'enter/return' key on the user's keyboard
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.code === "Enter"){
        createListElement();
    }
}

// function to delete the button by pressing the delete button
function delItem(element) {
    if(element.target.className === "delClass"){
        element.target.parentElement.remove();
    }
}

addBut.addEventListener("click", addListAfterClick);

delBut.addEventListener("click", delItem);

input.addEventListener("keypress", addListAfterKeypress);