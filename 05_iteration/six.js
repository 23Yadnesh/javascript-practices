
const lang = ["JS", "C++", "REACT", "PYTHON", "CSS"] 

// const values = lang.forEach ( (item) => {
//     console.log(item);
//     return item
    
// })
// console.log(values);

const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNum = num.filter( (item) => {return item > 4})

const myNew = []

num.forEach( (item) => {
    if (item > 4) {
        // myNew.push(item)
            
    }

})

// console.log(myNew);


const Book = [
    { title : 'Book1', gnere: 'History', Published:'2000',
        republish:'2022'
    },
        { title : 'Book2', gnere: 'sciencce', Published:'1998',
        republish:'2012'
    },

        { title : 'Book3', gnere: 'Non-Fictional', Published:'2010',
        republish:'2024'
    },

        { title : 'Book4', gnere: 'History', Published:'1996',
        republish:'2010'
    },

        { title : 'Book5', gnere: 'science', Published:'1999',
        republish:'2015'
    },

        { title : 'Book6', gnere: 'Fiction', Published:'2002',
        republish:'2017'
    }

]

// const newBook = Book.filter ( (item) => item.gnere === 'History')
// console.log(newBook);

// const newBook = Book.filter ( (item) => item.Published <= '2000')
// console.log(newBook);

const newBook = Book.filter ( (item) =>{ 
    return item.gnere === 'History' && item.Published >= '2000'  })
console.log(newBook);

