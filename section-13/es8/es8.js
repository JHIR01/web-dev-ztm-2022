// .padStart() - this will add the arguement to the start of the string
'Turtle'.padStart(10);

// .padEnd() - this will add the arguement to the end of the String
'Turtle'.padEnd(10);

//

const fun = (
    a, 
    b, 
    c, 
    d, 
    ) => {
    consoole.log(a);
}

fun(1,2,3,4);

Object.values; // returns the values of each item in the object like an array
Object.entries; // this returns an array of arrays that consist an item's key and value
Object.keys; // iterates through the object

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
}); // this will sort through the object like an array

Object.values(obj).forEach(value => {
    console.log(value);
});

Object.entries(obj).forEach(value => {
    console.log(value);
});


// Creating new username
// 1. creates an array of arrays of the properties of the object
// 2. the arrays are then defined by a value
// 3. the items at position 1 is put together with the item at position 0
//      the item at position 0 is reduced to it's number and an ''
// 4. the function then maps the new value to the object
// 5. all the steps before now repeat until there are no more objects
// 6. the function then returns an array of all the new properties
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
});

// Async Await
