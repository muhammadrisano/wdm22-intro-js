// // declaration

// const nama = "risano"

// function sayHelo(val){
//     console.log(`helo ${val}, apakabar ?`);
    
// }

// sayHelo(nama)


function penjumlahan(val1, val2){
    const result = val1 + val2
    return result
    
    
}

const hasilPenjumlahan1 =  penjumlahan(10, 20)
const hasilPenjumlahan2 = penjumlahan(15, 28)

// console.log(hasilPenjumlahan1);
// console.log(hasilPenjumlahan2);


//expression

const pengurangan = function(val1, val2){
    const result = val1 - val2
    return result
}

const hasilPengurangan1 = pengurangan(30, 10) 
// console.log(hasilPengurangan1);


// arrow function

const perkalian = (val1, val2)=>{
    const result = val1 - val2
    return result
}


// const perkalian = (val1, val2)=> val1 * val2


const hasilPerkalian1 = perkalian(5, 7)
console.log(hasilPerkalian1);
