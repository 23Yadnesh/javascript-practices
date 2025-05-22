// singelton
//object literal

const jsUser = {
    name: "Yadnesh",
    "full name": "Yadnesh Rane",
  //[mySym]: "key1", i've done something wrong here.
    email: "yrane555@gmail.com",
    age: 24,
    location: "Bhandup",
    isLoggedIn: "false",
    lastActive: ["Sunday", "Monday"],

}

//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
//console.log(jsUser[mySym]);

jsUser.email= "yadnesh2304@gmail.com"
//Object.freeze (jsUser)
jsUser.email = "xyz@gmail.com"

//console.log(jsUser);

jsUser.greeting = function() {
    console.log(`Hello my name `);
    }


jsUser.greetingTwo = function() {
    console.log(`Hello my name is, ${this.name}`);
    }
   // console.log(jsUser.greeting());
    //console.log(jsUser.greetingTwo());

    // when ever you access values most of the time you use dots(.) some times we use Bracket [] if there is no other option.   
    


