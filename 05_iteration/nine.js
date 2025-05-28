// const myNum = [1, 2, 3]

// const newNum = myNum.reduce ( function (acc, currval) {
//     console.log(`acc value ${acc} , currval value ${currval} `);
    
//     return acc + currval


// },0 )

// const newNum = myNum.reduce ( (acc, currval) =>  acc + currval ,0 )

// console.log(newNum);


const shopingKart = [
    {
        course: 'JS',
        price : 5999
    },

        {
        course: 'Python',
        price : 9999
    },

        {
        course: 'reactjs',
        price : 7999
    },

        {
        course: 'data science',
        price : 11999
    },

        {
        course: 'php',
        price : 5999
    }
] 

const total = shopingKart.reduce ( (acc, item) => acc + item.price ,0)

console.log(total);
