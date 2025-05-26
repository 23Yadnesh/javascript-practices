const userEmail = []

if (userEmail) {
    console.log(`email recieved`);    
}else {
    console.log(`email not recieved`);
    
}

// falsy values
// false, 0, -0, BigInt 0n, "", NaN, null, undefine

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length===0){
//     console.log("arrey is empty");
    
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
    
// }

// Nullish coalescing operator (??): null undefined
 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 5 ?? 10

// console.log(val1);

// Terniary Operator
// condition ? true : false

const coffee = 150
coffee >= 200 ? console.log("yes") : console.log("No");

