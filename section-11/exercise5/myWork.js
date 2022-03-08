var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

function checkDriverAge() {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
	    alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
	    alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
	    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

// part 2

var checkDriverAge2 = function(){
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
	    alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
	    alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
	    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

// BONUS

function checkDriverAgeB(age){
    if (Number(age) < 18) {
        return "Sorry, you're too young to drive this car. Powering Off"
    } else if (Number(age) === 18) {
        return "Congrates on your first year of driving. Enjoy the ride!"
    } else {
        return "Powering on. Enjoy the ride!"
    }
}