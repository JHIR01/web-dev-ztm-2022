// scope 

// scope is the variable access of the items that are available to be called

function bb() {
    var a = "hello";
}

// the var be can only be accessed when the function is ran or store inside another variable

var b = "Can I access this?";

// root scope
var fun = 5; 

function funFunction() {
    // child scope
    var fun = "hello";
    console.log(1, fun);
}

function funerFunction() {
    var fun = "Byeee";
    console.log(2, fun);
}

function funestFunction() {
    fun = "AAHHHHHH"; // here the root scope is being over written
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();