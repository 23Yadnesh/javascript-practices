
// function myName() {
// console.log("Y");
// console.log("a");
// console.log("d");
// console.log("n");
// console.log("e");
// console.log("s");
// console.log("h");

    
// }

// myName()

// function addTwoNumbers(number1, number2 ) {
//    console.log(number1 + number2);
    
    
// }

// const result = addTwoNumbers( 3, 6 )

// console.log("Result:",result);

function addTwoNumbers(number1, number2 ) {
   
//    let result = number1 + number2
//    return result
    return number1+number2
}

const result = addTwoNumbers( 3, 6 )

// console.log("Result:",result);

function loggeInUser (myName = "Tom") {
    if (!myName) {
        console.log("Please enter name");
        return
        
    }

    return`${myName} just logged in`
}

// console.log (loggeInUser("Yadnesh"))
console.log(loggeInUser());
console.log(loggeInUser("yadnesh"));



