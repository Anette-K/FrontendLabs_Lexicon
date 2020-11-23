
function sum3numbers(numberArray) {

    //When the loop starts the total value is the number on the far left 
    //and the current number is the one next to it.
    let result = numberArray.reduce((total, currentNumber) => total + currentNumber); 
    return result;

}

//let inputStrings = ['2', '3', '4']; //output: 9
let inputStrings = ['1.5', '1.5', '-1']; // output: 2 (not 1..assuming typ-o lab description)
inputNumbers = inputStrings.map(Number); //Number (builtin) accepts the current value (far right) and it progresses onward.

console.log(sum3numbers(inputNumbers));