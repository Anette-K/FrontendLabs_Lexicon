function giveNextDay(input) {
    //d.setDate(d.getDate() + 50);
    const inputNums = input.map(Number);

    // Accounting for how Date objects count months (0,..11)
    inputNums[1] = inputNums[1] - 1;

    // need to use setUTC instead of new Date(params) to mitigate timezone issues ()
    let d = new Date();
    d.setUTCFullYear(...inputNums); //...(3dots)spread operator for the arguments. Array becomes 1,2,3

    //adds a day and updates
    d.setUTCDate(d.getUTCDate() + 1);

    //polish output string to ISO, and no 0 in single-digit months or days. (practice regex)
    let regx = /\-0/g; //"-0" anywhere in the string
    let output = d.toISOString().slice(0, 10).replace(regx,'-');
    
    return output;
}

const input = ['2016', '9', '30'];
console.log(giveNextDay(input));