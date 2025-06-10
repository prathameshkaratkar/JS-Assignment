/*
    3. Write a function called calculateTotal that takes price
    and quantity as parameter
*/

// Using normal function declaration syntax

function calculateTotal(price, quantity) {
    return multiply(price, quantity)
}

function multiply(price, quantity) {
    return price * quantity
}

console.log(calculateTotal(3,9))


// Using Arrow function syntax

const calculateTotalArrow = (price, quantity) => {
    return multiplyArrow(price,quantity)
}

const multiplyArrow = (price, quantity) => {
    return price * quantity
}

console.log(calculateTotalArrow(2,5))