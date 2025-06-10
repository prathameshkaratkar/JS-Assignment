/*
    Call a function named sayThanks 3 times using a for loop. the function 
    should log 'Thanks for learning!' each time;
*/

// Using normal function declaration syntax;


function sayThanks (number) {
    for(let i= 0; i< number; i++) {
        console.log('Thanks for learning!');
    }
}

sayThanks(3);


// Using Arrow function syntax 

const sayThanksArrow = (number) => {
    for(let i = 0; i < number; i++) {
        console.log('Thanks for learning!')
    }
}

sayThanksArrow(5)