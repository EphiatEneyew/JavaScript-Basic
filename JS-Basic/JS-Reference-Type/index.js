//Object--reference type. we have key-value pairs

let person = {
    fName: 'Ephrem',
    age: 30
};

//Accessing the properties-- the first way is Dot Notation.
person.fName = 'Alazar';

//Bracket Notation
let selection = 'fname'
person[selection] = 'Betselot';

console.log(person.fName);