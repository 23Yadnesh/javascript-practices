//const tinderUser = new object() this is single term object 
// const tinderUser = {} this is non single term object
const tinderUser ={}

tinderUser.id = "4323"
tinderUser.name = "yadnesh"
tinderUser.loggedIn = "false"

//console.log(tinderUser);

const instaUser = {
    email:"yrane555@gmail.com",
    userName: {
        fullName:{
            firstName: "Yadnesh",
            lastName: "Rane",
        }
    }
}

//console.log(instaUser.userName.fullName.lastName);

const red = {1:"a",2:"b"}
const blue ={3:"c",4:"d"}

//const yellow = {red,blue}
//const yellow = Object.assign({}, red ,blue)
//const yellow = {...red,...blue}


//console.log(yellow);

const user = [
    {
        user : "I"
        pass : "123"
    },
    {
        user : "I"
        pass : "123"
    },

    {    user : "I"
        pass : "123"
    }
]
user[1].email

