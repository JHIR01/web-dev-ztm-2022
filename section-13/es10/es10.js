// .flat() - this will get rid of all the nested arrays and present all items in one array
const a = [1, [2,3] ,[4,5]];
a.flat(); 

const b = [1, 2, [3, 4, [5]]];
b.flat(); // there will be a nested array returned because there is a triple nested item
// the return is not completely flattened
b.flat(2); // this will completely flatten the array
// By default '.flat()' will flatten the array with an argument of 1
// when a numebr is placed in the parameters, think of it like the functions knows how many
//  times it has to flatten the array.

// In the case where there are a lot of nested arrays and can't keep track of how many arrays,
// you can just use one less of the array's length to get all of them in the same array.

const entries = ['bob', 'sally',,,,, 'cindy'];
entries.flat();

// flatMap() - uses the flat function and the map function on the array
const tenChaos = b.flatMap(tempN => {
    tempN + 10;
}); 
// this function will get be and add 10 to all the items in the flatten array

userEmail1 = '     eddytheegale@gmail.com';
userEmail2 = 'JohnnyDangerous@gmail     ';
console.log(userEmail1.trimStart()); // this reduces the blank spaces in the font
console.log(userEmail2.trimEnd()); // thiis reduces the blank spaces in the back

// FromEntries - turns a nested array into an object

userProfiles = [['commanderTom', 23], ['derekZland', 40], ['hansel', 18]];
const obj = Object.fromEntries(userProfiles);
console.log(obj);

// try catch block - this allows the program to 'try' a piece of code and 'catch' errors,
//      to avopid the program from crashing
try {
    bob + 'hi';
} catch {
    console.log('you messed up');
}
