// creating an item for referencing an element later
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
// here we are getting the entirety of the 'ul' element to reference
var ul = document.querySelector("ul");

// this function will run when there a "click" action from the user on the Element
button.addEventListener("click", function() {
    // checking if there is anything in the textbox to be added into the list
    if(input.value.length > 0){
        // here we are creating a new element, with a tag of "li"-list
        var li = document.createElement("li");
        // here we are getting the text in the parameter and making it into a "li" element
        // the 'input.value' is what is written in th text box 
        li.appendChild(document.createTextNode(input.value));
        // we are adding the li element, that we created, to the ul element
        ul.appendChild(li);
        // after adding the new item in to the list, we want the text box to be empty
        // this will empty the textbox once the button has been pressed and the item has been added
        input.value = "";
    }
})

// this function will allow the user to enter in what they want and press 'enter' key to add it to the list
// here we are listening for a specific key to be pressed
// the function has a parameter of 'event' meaning that is waiting for the 'keypress' to happen
button.addEventListener("keypress" , function(event) {
    if(input.value.length > 0 && event.code === 13){ // not working for some reason
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})