const distance = input => {

    const inputNums = input.map(Number);

    pointA = {x : inputNums[0], y : inputNums[1]};
    pointB = {x : inputNums[2], y : inputNums[3]};

    return Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);
} 
//const input = ['2', '4', '5', '0']; //gives 5
const input = ['2.34', '15.66', '-13.55', '-2.9985']; //gives 24.50778901186315
console.log(distance(input));
