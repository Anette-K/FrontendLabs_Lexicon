class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        
        
    }
    
    toString() {
        return this.firstName + ' '+ this.lastName
    }
}
let person = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');


console.log(person);    // gives classname and constructor
console.log(''+ person); //calls  my toString() method

//testing console prints from another object
let a = new Date()
console.log(a)
console.log(a.toString())