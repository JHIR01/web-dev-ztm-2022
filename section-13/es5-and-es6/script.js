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

