const marvelHeros = ["spiderman", "Thor", "Hulk"]
const dcHeros = ["batman", "flash", "superman"]

marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// spread

const allNewHeros = [...dcHeros, ...marvelHeros]
// console.log(allNewHeros);


const another_arry = [1, 2, 3, 4, [5, 6, 7 ] , 8, 9,  [1, 2, [3, 4]] ]
const newarry = another_arry.flat(Infinity);

// console.log(newarry);

console.log(Array.isArray("yadnesh"));
console.log(Array.from("yadnesh"));
console.log(Array.from({name:"yadnesh"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


