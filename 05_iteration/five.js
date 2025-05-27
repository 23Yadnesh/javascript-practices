// *********foreach Loop

const codeing = [ "JS", "CPP", "RB", "PYT"]

// codeing.forEach ( function (item){
    // console.log(item);
    
// })

// codeing.forEach ( (item)=>{
//     console.log(item);
    
// })


// function printME (item){
//     console.log(item);
    
// }
// codeing.forEach(printME)

// codeing.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const lang = [
    {
        language : "hindi",
        country : "India"

    },
        {
        language : "English",
        country : "USA"

    },
        {
        language : "French",
        country : "France"

    }
]

lang.forEach ( (item)=> {
    console.log(item.language);
    
})