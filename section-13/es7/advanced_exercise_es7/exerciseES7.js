// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const within = (array, name) => {
    for(var i = 0; i < array.length; i++){
        if (array[i].includes(name)){
            return array[i];
        }
        return false;
    }
}

// correct answer
dragons.filter(name => name.includes('John'))

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const bigPower = (exp) => { return 100**exp };


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

// the reason why it does not return the expected number is because there is a maximum
//  number that JS can store into its memory. And since the result is bigger than it's
//  memory, the result is infinity.
