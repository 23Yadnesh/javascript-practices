// singelton
//object literal

const jsUser = {
    name: "Yadnesh",
    "full name": "Yadnesh Rane",
   [mySym]: "key1",
    email: "yrane555@gmail.com",
    age: 24,
    location: "Bhandup",
    isLoggedIn: "false",
    lastActive: ["Sunday", "Monday"],

}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);



