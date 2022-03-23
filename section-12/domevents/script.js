var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// function to get the length of the item the user wants to add the the list
function inputLength() {
	return input.value.length;
}

// function to add an item to the list by appending it to the ul element
function createListElement() {
	// here there is a list item being created to be added to the list
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

// function to check if the button is pressed, th item will be added to the list
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// function to add the item to the list with the keypress of the "enter"
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// 1. If you click on the list item, it toggles the '.done' class on and off
function clickForCross(tItem) {
	if (tItem.target.tagName === "LI") {
		console.log(tItem.target);
	}
}

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button


// when the button is pressed, the item with the length greater than 0 will be added to the list
button.addEventListener("click", addListAfterClick);

// when the 'enter' key is pressed, the item with the length greater than 0 will be added to the list
input.addEventListener("keypress", addListAfterKeypress);