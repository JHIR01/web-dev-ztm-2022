const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures - a function ran, the function exicuted. It's never going to be ran again
//  BUT it;s going to rememebr that there are refrences to those varaibles.
//  So the chukld scope always gas access to the parent scope
// the child scope will have access to the parent scope

// Currying - the process of converting a function that takes multiple arguements
//  into a function that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3); // this will return '(b) => a * b'
curriedMultiply(3)(4); // 4 will be placed at for b

// This can be used in cases where yoy just want to see what happens to a variable in 
//  the function.
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5); // this will return 25

// COMPOSE - the act of putting two functions together from a third function, where the
//  output of one function is th input of another function.

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose(sum, sum)(5); // returns 7
// the inner most function will run and the result will become the input of the outer function

// AVOIDING SIDE EFFECTS AND FUNCTIONAL PURITY
//  Side effects - something that results in a value that isn't part of the desired output