// 

const basket = ['apples', 'oranges', 'grapes'];

// standard for-loop method
for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}

// forEach method
basket.forEach(item => { console.log(item) } );

// for of loop
// iterating - able to go one by one and look at the items in an array
// iterables - an item that can be iterated
//      arrays and strings
for (item of basket) {
    console.log(item);
}

// for in loop - works with objects; lets ues see the objects properties
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

for (item in detailedBasket){ // this is not iteration
    console.log(item);
}
// this is not iterating (reserved for arrays and strings)
// enumerating - looping to see the properties of an object (exclusively for objects)

// when using for-of with an object, there will be an error saying that the item is interitable
// when using for-in with an object, the loop will return the integer placements of each item