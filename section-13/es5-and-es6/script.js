// let & const - ways of declaring a variable

const player = 'bobby'; // you're not able to reassign the variable
let experience = 100;
let wizardLevel = false; // only seen in this scope

if (experience > 90) {
    let wizardLevel = true; // only seen in this scope
}

// with 'let' the scope is closed off to that particular scope

// from now on, use 'let' instead of 'var'. And 'const' if the varaible 
//      is not going to change.

// how to assign variables from objects
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// with destructuring you can do this instead
const { player, experience } = obj;
let { wizardLevel } = obj;

const name = "john snow";

// TEMPLATE STRINGS

const greeting = "Hello " + user + " you seem to be doing " + greet + "."

const greetingBest = `"Hello there"`; // the `` will display everthing written inbetween them

const newName = "Sally";
const age = 34;
const pet = "horse";

const betterGreeting = `Hello ${newName} you seem to be ${age - 10}. What a lovely ${pet} you have!`; // the new syntax will refer to the item being called within
// the brackets 


// DEFAULT ARGUMENTS

function greet(name="", age=30, pet="cat"){
    return `Hello ${newName} you seem to be ${age - 10}. What a lovely ${pet} you have!`;
}
// because of the arguements in the parameters, the values assigned there are automatically placed.
// if someone does not enter in different arguements, then the function will not fail

// SYMBOL

// symbols are used to create completely new and unique items
// when compared to each other, they will never be the same

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// ARROW FUNCTIONS

function add(a, b){
    return a + b;
}

// instead of writing function, you just need to write an arrow
const add = (a, b) => a + b;