// Immediately Invoked Functions Expression

(function chai (){ 
    // 
    console.log(`DB connected`);
    
})();

((name)=>{
    console.log(`DB connected to ${name}`);
    
}) ("Yadnesh")

// How to explain in interview what is IIFE 
// Global scope ke pollution se problem hoti hai kahi baar to us global scope ke variation / declaration hai use hatane ke liye IIFE use karte hai.