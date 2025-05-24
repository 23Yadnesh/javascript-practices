
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
// console.log(loggeInUser());
// console.log(loggeInUser("yadnesh"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
    
}

// console.log(calculateCartPrice(200, 300, 400, 500, 600));

const user = {
    name : "yadnesh",
    price : 499
}

function newUser(anyUser) {
    console.log(`Username is ${anyUser.name} and price is ${anyUser.price}`);
    
    
}

// console.log(newUser(user));

// newUser(user)
// newUser ({
    // name : "Tanvi",
    // price: 999
// })

const myNewArray = [200, 400, 600, 800]

function returnThirdValue(getArray) {
    return getArray[3]
    
}

// console.log(returnThirdValue(myNewArray));
// console.log(returnThirdValue([200, 3000, 400, 700, 5000]));
