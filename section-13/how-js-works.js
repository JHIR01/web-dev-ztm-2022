// How does JS work?:

// Explain the difference between asynchonous and sychonous in JS?:

//      synchronous programing: functions/items are being executed singularly
//      Asynchronous programming: functions/items are being executed at multiple instances

// JS is a single threaded language that can be non-blocking:

//      single threaded means that there is only one call stack
//      JS was designed to be like this because there is no need for complicated senarious
//      Deadlocks - a set of processes that are stopped because there is another process
//              that needs to take place before the next executable can be active
//      JS as a single threaded language can help avoid deadlocks because there is only
//              one task happening at a time.

// Whats is a program?:
//      It has to alocate ram and memory
//      It has to parse and execute

// In every browser there is an engine that reads the code and allows a document to be
//      interpreted 
// All engines have:
//      A memory head: where the memory allocation happens
//      Call Stack: hold the executable code

// Doing this allocates memory:
const a = 1; // this is stored in the memory heap
const b = 10;
const c = 100;
// by increase the number of variables, it increases memory leak
// Memory Leak: needless item that takes up memory in the program; an unused item

// call stack - reads and executes the script
console.log('1');
console.log('2');
console.log('3');

const one = () => {
    const two = () =>{
        console.log('4')
    }
    two();
}
// This is the call stack of the function:
//      console.log('4');
//      two();
//      one();

// Example of a stackOverflow
// this is a recursive function - a function that calls itself
function foo(){
    foo();
}

// Asynchronous programming example:
console.log('1');
setTimeout(() => { // 'setITimeout' is a web api
    console.log('2');
}, 600000);
console.log('3');

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP