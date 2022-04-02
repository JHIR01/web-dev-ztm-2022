const array = [1, 2, 3, 10, 16];

// forEach

const double = [];
const newArr = array.forEach(num => {
    double.push(num * 2);
});

console.log("forEach", double);

// map, filter, reduce

const mapArr = array.map(num => {
    return num * 2;
});

console.log("map", mapArr);

// map is better to use for modifying an array

// forEach requires side effects to run

// filter - condition based array where things happen if an event is true

const filterArr = array.filter(num => {
    return num > 5;
});

console.log('filter', filterArr);

// reduce - 

const reduceArr = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log('reduce', reduceArr);