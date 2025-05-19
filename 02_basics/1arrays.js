// arrays

const myarr = [0,1,2,3,4,5]

const myarr2 = new Array(1,2,3,4)
// console.log(myarr[1]);

// array methods
// myarr.push(7)
// myarr.pop()

//myarr.unshift(8)
//myarr.shift(4)


// console.log(myarr.includes(3));
// console.log(myarr.indexOf(7));

// const newArr = myarr.join()
// console.log(myarr);
// console.log(newArr);

// slice & Splice

console.log("A",myarr);

const myN1 = myarr.slice(1,4)
console.log("B",myarr);
console.log(myN1);

const myN2 = myarr.splice(1,5)
console.log("c",myarr);
console.log(myN2);

// try to understand which operation manipulate original value and which not in slice & splice method by trying upper log.










