
// var c = 300
let a = 200

if (true) {
    let a = 10
    const b = 20
    var c = 30
  //  console.log("inerValue:",a);
    
    
}

//console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const userName = "yadnesh"

    function two() { 
        const websiteName ="Youtube"

        console.log(userName);
            
    }
    // console.log(websiteName);
    

    //two()
}

// one()

if (true) {
    const userName = "yadnesh"    
    if (userName === "yadnesh"){
        const websiteName = " Youtube"
        // console.log(userName + websiteName);

    }

    // console.log(websiteName);
    
}
// console.log(userName);


// ++++++++++++++++++++++++++++++Interesting

console.log(addone(5))

function addone(num) {
    return num + 1
    
}

const addtwo = function (num) {
    return num + 1
    
}
addtwo(7)