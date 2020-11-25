function multiplyNums(num1, num2) {
    
    let result = num1*num2;
    return result;
}
//const inputNums = ['3','2'].map(Number);              //output: 6
const inputNums = ['23632.36','-12.3249'].map(Number); //output: -291266.473764
console.log(multiplyNums(...inputNums)); 
//for some reason, multiplyNums(inputNums[0],inputNums[1]) gives NaN.



// //----If time: understand+add capability to take userinput from console (multiple line)----
// 
//const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('', (usrinput1) => {
//     console.log('Hey there ${usrinput1}!');
//     readline.close();
//   });
//-----------------------------------------------------------------------

