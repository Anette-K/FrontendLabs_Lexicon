
let threeNumbers = [1, 2, 3];

function sum3numbers1(numberArray) {
    let result = threeNumbers[0]+threeNumbers[1]+threeNumbers[2];
    return result;

}

function sum3numbers_reduce(numberArray) {

    //When the loop starts the total value is the number on the far left 
    //and the current number is the one next to it.
    let result = numberArray.reduce((total, currentNumber) => total + currentNumber); 
    return result;

}

console.log(sum3numbers1(threeNumbers));
console.log(sum3numbers_reduce(threeNumbers));