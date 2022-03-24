//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

function experiencePointsT() {
    winBattle(true) ? 10 : 1;
}

// var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
return undefined;

//#3 return value when moveCommand("back");
return "you have arrived";

//#4 return value when moveCommand("right");
return "you run into a troll"

//#5 return value when moveCommand("left");
return undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function gradeMaker(number){
    var lGrade;
    switch (number) {
        case number < 50: 
            lGrade = "Fail";
            break;
        case number > 50: 
            lGrade = "Pass";
            break;
        default: 
            lGrade = "Please enter in a number valued grade";
            break;
    }
    return lGrade;
}