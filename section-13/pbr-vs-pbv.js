// primative type are imuteable - they cannot be changed

var a = 5; // passed by primative
var b = a; 

b++; // passed by value - copy the value and create somewhere else in memory

let obj1 = {
    name: 'Yao',
    password: '123'
};

let obj2 = obj1; // this is assigning the address in memory where obj1 is

obj2.password = "easypeasy";

console.log(obj1); // notice that the object also changed
console.log(obj2); 
// this is a case of pass by value

var c = [1, 2, 3, 4, 5];
var d = c;

d.push(12345);
console.log(d);
console.log(c);

// there might be cases where we want to copy an object but have them changed overtime

var e = [].concat(c);
e.push(67890);
console.log(e);

let object = {
    a: 'a',
    b: 'b',
    c: 'c'
}

let clone = Object.assign({}, object); // here we are cloning an objects so that none of the 
//  similar properties will change when one of the other items change

let clone2 = {...object}; // this is just another way of assigning an object

object.c = 5;
console.log(object);
console.log(clone);
console.log(clone2);


// what happens when there is an object within an object?:
let complexObj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me!'
    }
};

let complexClone = {...complexObj};
let superClone = JSON.parse(JSON.stringify(complexObj));

complexObj.c.deep = 'hahaha';
console.log(complexClone);
console.log(complexObj);
// what happens here is that the addresses my have been changed but the outer layer of the 
// is the one that is fully cloned. Meaning, all of the properties have been assigned different
// values, but the object within the object is has just been plainly copied with it's address
// in memory. This is something called a shallow copy.

console.log(superClone);