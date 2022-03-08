// function declaration
function sayHello(){
    console.log("hello");
}

sayHello();

// anon function
var sayBye = function() {
    console.log("Bye");
}

sayBye();

// function with an arguement
function sing(song) {
    console.log(song);
}

sing("Hellooo");


// function with more than 1 arguement
function multiply(a, b) {
    return a*b
}

alert(multiply(5, 10));