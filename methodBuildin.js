// sort -> untuk melakukan sorting / penurutan nilai didalam aray

const myValue = [8, 4, 7, 14, 5, 9, 6]

const hasilSorting = myValue.sort((a, b)=>b-a)
// console.log(hasilSorting);


// map -> untuk melakukan perulangan / pengolahan nilai didalam array

// const hobies = ["ngoding", "joging", "gaming", "reading", "swimming", "writing"]


// for(let i = 0; i<hobies.length; i++){
//     console.log(`hobi ke ${i+1} saya adalah ${hobies[i]}`); 
// }

// hobies.map((item, i)=>{
//     console.log(`hobi ke ${i+1} saya adalah ${item}`); 
    
// })

// hobies.forEach((item, i)=>{
//     console.log(`hobi ke ${i+1} saya adalah ${item}`); 
    
// })

// const newHobies =  hobies.forEach((item, i)=>{
//     return item + 'X'
    
// })

// console.log(newHobies);


// split -> digunakan untuk memecah nilai string menjadi sebuah array

// const text = "saya ingin menjadi progremmer javascript"

// const result = text.split(' ')
// console.log(result);

// join -> untuk menggabungkan nilai arrya menjadi sebuah string
const hobies = ["ngoding", "joging", "gaming", "reading", "swimming", "writing"]

const result = hobies.join(" ")
console.log(result);
