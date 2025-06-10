/*
    Create a function isAdult that takes an age as input and returns 
    true if the age is 18 or above, otherwise false.
*/


// Using normal function declaration syntax

function isAdult(age) {
    if(age > 18) {
        return true;
    }
    return false;
}

console.log(isAdult(12))


// Using Arrow function syntax

const isAdultArrow = (age) => {
    if(age > 18) {
        return true
    }
    return false
}

console.log(isAdultArrow(19))