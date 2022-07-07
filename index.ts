// EVERYDAY VARIABLES

// Defining variables as type compliant
const stringVariable : string = "True";
const numberVariable : number = 1;
const booleanVariable : boolean = true;
const arrayVariable : Array<any> = ["True", 1, true];
const arrayVariablevariant : any[] = ["True", 1, true];

// Defining functions as typs compliant
function anyFunc(someVariable : any) {
    return console.log('It f**king works!')
}

someVariable : any => console.log('It also f**king works!')

function returnTypeAllocations(answer) : boolean { // <-- Infers that the return type must be a boolean
    return answer // == 0 : true ? false
}

// Anonymous functions
const names = ["Sunday", "Obinna", "Oruwhone"]
const numbers = [1, 2, 3]
names.forEach(s => names.toUpperCase()) // TS was still able to recognize the type of 'names' as 'string[]'
numbers.forEach(s => numbers.toUpperCase()) // TS was still able to recognize the type of 'names' as 'number[]'

// Object types
function xYCoordinate(x : number, y : number) {
    return("The value of the horizontal position is '" + x + "', while the the veritical position is '" + y + "'.")
}

