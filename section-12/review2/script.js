var enter_button = document.getElementById("enter");
var userIn = document.getElementById("userinput");
var list = document.querySelector("ul");

function inputLength() {
    return userIn.value.length;
}

function createListElement() {
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(userIn.value));
    list.appendChild(newItem);
    userIn.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.code === "Enter"){
        createListElement();
    }
}

enter_button.addEventListener("click", addListAfterClick);

userIn.addEventListener("keypress", addListAfterKeypress);