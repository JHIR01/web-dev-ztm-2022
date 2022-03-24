// ternary operator (CONDITIONALS)
condition ? expr1 : expr2;
// Condition is analyzed and if it's true then perform 'expr1'
//    If not then do expression 'expr2'

// Example:
function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = 
    "Your account # is " + ( isUserValid(false) ? "1234" : "not available");


// This now looks a lot more complex
function condition() {
    if(isUserValid(true)){
        return "You may enter";
    } else {
        return "Access denied";
    }
}

var answer2 = condition();

// Switch statement

// This is mean to check for a lot of conditions instead of using an if else statement
function moveCommand(direction) {
    var whatHappens;
    switch (direction) { // switch checks for the arguement and compares them to the case items
        case "forward": // case hold the conditions that have to be met in order for the event to happen
            whatHappens = "you encounter a monster";
            break; // If the condition is met, then stop looking at the other conditions.
        case "back":
            whatHappens = "you arrived home"
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "forward":
            whatHappens = "you run into a troll";
            break;
        default: // if none of the conditions are met, then this will happen
            whatHappens = "please enter in a valid direction"
    }
    return whatHappens
}