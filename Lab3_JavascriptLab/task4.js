
// different way of creating a function
const toObject = input => {
    
    let people = [] //let-- only defined within the scope

    for(let i = 0; i < input.length; i += 2) {
        
        let person = {name : input[i], age : Number(input[i+1])}
        people.push(person);
        
    }
    return people;
}
// being more aware of variable declarations 
const input = ['12', 'John', '15', 'Alfred', '9'];
const minAge = Number(input.shift()); // the refence is immutable, but not the values inside. shift() works.
const people = toObject(input); //people not redeclared-this is new because different scope
console.log(people.find(p => p.age > minAge));


// //checking
// people.forEach(p => console.log(p));