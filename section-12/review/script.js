// This allows us to reference the button on the document later in the code
// when using 'getElementsByTagName' be sure to specify the index because there could be more than as a tag type
var button = document.getElementsByTagName("button")[0]; // "0" specifies what we want

// This is something called and event function
// addEventListener will execute the function when the first parameter has been met
// whenever the button is clicked there will be something writen in the console
button.addEventListener("click", function() {
    console.log("CLICK!!!"); // this is what is going to happen when the button is clicked!
});

// Here is another example for the different type of action for something to happen
button.addEventListener("mouseenter", function() {
    console.log("MOUSE OVER THE BUTTON!");
});