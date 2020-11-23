function calcSumVATtot(strings) {
    let numberArray = strings.map(Number);
    let sum = numberArray.reduce((sum, currentNumber) => sum + currentNumber);
    let vat = sum * 0.2;
    let total = sum + vat;
    return [sum, vat, total];
}

//Input
//let strings = ['1.20', '2.60', '3.50'];
let strings = ['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445'];


//Output-two ways
output = calcSumVATtot(strings);
console.log('Sum: ' + output[0] + '\n Vat: ' + output[1] + '\n Total: '+ output[2]);

document.getElementById("output").innerHTML = 
'Sum: ' + output[0] + '<br />Vat: ' + output[1] + '<br />Total: '+ output[2];