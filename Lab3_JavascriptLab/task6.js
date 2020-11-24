function getFigureArea(input) {
    
// formula: H*W + w*h - w*H . Assuming input is [w,h,W,H]- with rectangle sides belonging in pairs.
    const inputNums = input.map(Number);

    const summed = (inputNums[0] * inputNums[1]) + (inputNums[2] * inputNums[3]);
// ensures that H<h and w<W , since the lower right corner is shared.
    const wH = Math.min(inputNums[0], inputNums[2]) * Math.min(inputNums[1], inputNums[3]);
    const result =  (summed) - (wH);
    return result;
} 
//const input = ['2', '4', '5', '3']; // gives 17
const input = ['13', '2', '5', '8'];  // gives 56

console.log(getFigureArea(input));

