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

console.log(instaUser.userName.fullName.lastName);
