// returns an array of elements under the the same tag name as the arguement 
document.getElementsByTagName("");

// gets an array of items that are under the same class name as the arguement
document.getElementsByClassName("");

// gets the first element under the same id of the arguement
document.getElementById("");

// gets the specified element number under the index and the id of the same arguement
document.getElementById("")[0];

// works the same way as 'getElementBy...' but its a lot more flexible with it's arguements and can call items based on their css Selectors
document.querySelector("");

// gets all the items under the same tag as the arguement
document.querySelectorAll("");

// gets the specific item under the same attribute arguement
document.getAttribute("");

// get the very specific attribute value based on the tag type and the attribute
document.querySelector("").getAttribute("");

// changes the very specific attribute value to the the second arguement in the second method
document.querySelector("").setAttribute("", "");

// this changes the type of the query item 
document.querySelector("").style.background = "color";

// this give new css styling to the item in the 'querySelector'
document.querySelector("").className = "newClassName";

// this will return a list of items under the same tag name in the 'querySelector'
document.querySelector("").classList;

// this will change the styling of the item of the tag name in the 'querySelector'
document.querySelector("").classList.add("");

// this will change the true or false value of this item based on certain actions specifed by the user for the css to be applied
document.querySelector("").classList.toggle("");

// this will chanege the html of the item, meaning you can change what it says and the styling of the item
document.querySelector("").innerHTML = "";

// gets the outer tag of the tag specified in the query
document.querySelector("").parentElement;

// gets the items inside the query as an array
document.querySelector("").children;