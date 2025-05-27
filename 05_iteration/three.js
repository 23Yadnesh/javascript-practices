//************ forof Loop

const num = [1, 2, 3, 4, 5]

for (const key of num) {
    // console.log(key);
    
}

const greeting = "Hello World"

for (const val of greeting) {
    // console.log(`define each charachter ${val}`);
    
}

// *********maps

const map = new Map

map.set ( 'IND', "India")
map.set ( 'FR', "France")
map.set ('RS', "Rusia")

// console.log(map);
 
for (const [key, Value] of map) {
    console.log(key,':-', Value);
      
}
