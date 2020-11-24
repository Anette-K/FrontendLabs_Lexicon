


// testing to use a generator function
function* range(start, n) {
    yield start;
    if (start === n) return; //basecase
    yield* range(start + 1, n);
    
}

function stringOfNums(input) {
    const n = Number(input);
    //building the string using generator
    let str = '';
    for ( i of range(1, n)) str += i.toString();
    console.log(str); 

}

const input =['11'];
stringOfNums(input);




