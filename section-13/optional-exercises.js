// Question 1
// 1. create a nested loop to compare each item in the array.
// 2. If the number in the inner loop is equal to the number in the outer loop 
//      then place the number in the same array.
// 3. regardless if there is another duplication, each number will be placed in it's
//      own array once the it has been looped in the first loop.
// 4. Use a flat() function to make everything in the new array in it's correct format
const cleanTheRoom = (arr) => {
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                newArr.push(arr[i]);
            } else {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
}

// 1. Get the first number and see if there are any numbers equal to that one
//      if there is a number in the array equal to that number then make an array
//      and add the number to the array.
// 2. If the next number is greater than the number previously evaluated then, that
//      number will be placed in the front of the array.
// 3. If the next number is less than the number previously evaluated then, that number
//      will be placed behind the number previously evaluated.

// Question 2
const targetFun = (arr, target) => {
    let solution = [];
    for(var i = 0; i < arr.length; i++){
        var tempNum1 = arr[i];
        for(var j = i+1; j < arr.length; j++){
            var tempNum2 = arr[j];
            if(tempNum1 + tempNum2 === target){
                solution.push([tempNum1, tempNum2]);
            }
        }
    }
    return solution;
}

// Question 3