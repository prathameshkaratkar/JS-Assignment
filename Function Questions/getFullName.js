/*
    Write a function getFullName that takes two parameter
    firstName and lastName, and return the full name as a single string.
*/

// Using normal function declaration syntax

function getFullName(firstName, lastName) {
    return firstName + lastName
}


console.log(getFullName('Prathamesh ','Karatkar'))



// Using arrow function syntax

const getFullNameArrow = (firstName, lastName) => {
    return firstName + lastName;
}

console.log(getFullNameArrow('VS ','Code'))