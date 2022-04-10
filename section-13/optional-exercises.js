// Question 1
const roomFun = (arr) => {
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        let tempNum1 = arr[i];
        let tempArr = [tempNum1];
        for(var j = i + 1; j < arr.length; j++){
            let tempNum2 = arr[j];
            if (tempNum1 === tempNum2) {
                tempArr.push(tempNum2);
            }
        }
        newArr.push(tempArr);
    }
    return newArr;
}

const isThere = (arr, tempN) => {
    if (arr.includes(tempN)){
        return true;
    }
    return false;
}

const placement = (arr, item) => {}
// 1. Get the first number and see if there are any numbers equal to that one
//      if there is a number in the array equal to that number then make an array
//      and add the number to the array.
// 2. If the next number is greater than the number previously evaluated then, that
//      number will be placed in the front of the array.
// 3. If the next number is less than the number previously evaluated then, that number
//      will be placed behind the number previously evaluated.

// Question 2
const cleanTheRoom = (arr, target) => {
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