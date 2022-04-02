// reference type 

var object1 = {val: 10};
var object2 = object1;
var object3 = { val: 10 };

// When comparing the objects, object1 is true to object2. But object1 and object2 are
//  not true to object3.

// context
//  - 

function b() {
    let a = 4;
}

this; // refers to the scope the 'this' is currently in (object) 

const object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation
//  when you make a copy of an object to refernce 
//  works like a template; making instances and objects 

class Player {
    constructor(name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduction() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log("wizard", this);
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}!s`);
    }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shaun", "Dark Magic");