// debugging is recognizing a weird behavior and figuring why that is
// Majority of the time as a software engineer, you will be debugging

// suggestions: 
// - Be sure to console.log at certain steps to recongize what things are at certain steps
//      of a function
// - You can also use something called a 'debugger' in the function:
//      this will activate the browser debugger and stop the function 
//      from here you are able to ask the debugger certain items in the function to 
//          see how they act or change in the function.

const numbers = [1, 2, 3, 4, 5];

const printThese = (array) => array.forEach( item => { 
    debugger;
    console.log(item); 
});

