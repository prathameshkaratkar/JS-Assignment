/*
    write a function isEven that takes a number and returns true if 
    it is even, otherwise false


    -- Using normal function declaration syntax
*/

const number = 54

function isEven(number) {
    if(number % 2 === 0) {
        return true
    }
    return false
}

console.log(isEven(number))


// Using Arrow function Syntax

const isEvenArrow = (number) => {
    if(number % 2 === 0) {
        return true;
    }
    return false
}


console.log(isEvenArrow(number))