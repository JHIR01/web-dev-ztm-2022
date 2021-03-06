// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle.padStart(7);
rabbit.padStart(7);


// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
turtle = turtle.trim();

// trim reduced the spaces that is excess to the content
// Here the function is being reduced to it's content then added 9 '=' to the end 

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).forEach(value => {
  let words = value.flatten();
  console.log(words);
});

// correct:
Object.entries(obj).map(value => value.join(" ")).join(' ');
