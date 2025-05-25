const user = {

      userName: "Yadnesh",
      price: "999",

      welcomeMessage: function (){
        // console.log(`${this.userName}, welcome back`);
        // console.log(this);
        

        
    }
      
}
// user.welcomeMessage()
// user.userName= "Tanvi"
// user.welcomeMessage()
// console.log(this);

// function one () {
//     let name = "yadnesh"
//     console.log(this.name);
    
    
// }

// one()

// const one = function (){
//     let name = "yadnesh"
//     console.log(this.name);
    
// }

// one()

// const one =  () => {
//     let name = "yadnesh"
//      console.log(this);
    
//  }

// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }

// console.log(addTwo(5,6))

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(5,6))

// const addTwo = (num1, num2) => (num1 + num2)  (this types of method we are going to use in react Js)

// console.log(addTwo(5,6))

const addTwo = (num1, num2) => ({username:"yadnesh"})
console.log(addTwo(5,6))