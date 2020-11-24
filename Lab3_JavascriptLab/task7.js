function giveNextDay(input) {
    //d.setDate(d.getDate() + 50);
    const inputNums = input.map(Number);

    // Accounting for how Date objects count months (0,..11)
    inputNums[1] = inputNums[1] - 1;

    // need to use setUTC instead of new Date(params) to mitigate timezone issues ()
    let d = new Date();
    d.setUTCFullYear(...inputNums); //... spread operator for the arguments. Array becomes 1,2,3

    //adds a day and updates
    d.setUTCDate(d.getUTCDate() + 1);

    let output = d.toISOString().slice(0, 10); 
    return output;
}

const input = ['2016', '9', '30'];
let output = giveNextDay(input); 
 //todo: remove 0 in date. Either split(),substr, user replace '' using regex...
console.log(output[output.length-2]); // The offending char
console.log(output);