/*
    Create a function calculateArea that takes length and width as
    parameter and returns the area of a rectangle
*/

// Using normal function declaration syntax.

function calculateArea(length, width) {
    return length * width
}

console.log("The area of rectangle is: ", calculateArea(15,10))


// Using arrow function syntax

const calculateAreaArrow = (length, width) => {
    return length * width;
}

console.log("The area of rectangle is: ", calculateAreaArrow(23,43))