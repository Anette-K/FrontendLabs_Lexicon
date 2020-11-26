//import {Person} from "./task2_person";
//var Person = require('Person');
//import Person from "./task2_person";


function getPersons() {
    let db = [];
    
    db.push(new Person('Maria','Pettersson',22,'mp@gmail.com'));
    db.push(new Person('Lexicon'));
    db.push(new Person('Stefan','Larsson',25));
    db.push(new Person('Peter','Jansson',24,'ptr@live.com'));
    
    return db;
}

console.log('help');
let Person = require("./task2_person");
console.log(getPersons());