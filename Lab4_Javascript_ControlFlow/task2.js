
const calcAmountBoxes = (nBottles, boxCapacity) => nBoxes = Math.ceil(nBottles / boxCapacity);

// const input = ['20','5']; 
//const input = ['15','7'];
const input = ['5','10'];
const inputNums = input.map(Number);
console.log(calcAmountBoxes(...inputNums));
