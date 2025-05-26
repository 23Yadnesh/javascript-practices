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

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}