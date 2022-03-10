// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function() {
//     console.log("CLICK!!!");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLenght() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLenght() > 0 && event.code === "Enter") {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);