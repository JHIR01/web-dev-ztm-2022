var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// This function is creates the item on the list and gives functionality to those times
function createListElement() {
	// Makes the item a div
	var div = document.createElement("div");
	// Makes the item an li element
	var li = document.createElement("li");
	// Gives the item a delete button
	var delButton = document.createElement("button");
	// this gives the div element the styling it needs to be apart of the document
	div.classList.add("wrapper");
	// attactes the item to the list
	ul.appendChild(div);
	// buts the list item and the delete button on the same line and together
	div.append(li, delButton);
	// gives the li element the the class of 'taskClass'
	li.classList.add("taskClass");
	// assigns the user input as the text for the li element
	li.appendChild(document.createTextNode(input.value));
	// makes the li element empty
	input.value = "";
	// gives the delete button styling 
	delButton.classList.add("delClass");
	// give the button the name of 'Del' to indecate what it does
	delButton.innerHTML='Del';
}

// function to get the length of the input value from the user
function inputLength() {
	return input.value.length;
}

// function to add the item to the list of elements after clicking the button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// function to add the item to the list of element after pressing the 'enter' key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// function to cross out the item the user clicks on
function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

// function to delete the item in the list by pressing the "Del" button
function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

// 
function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);