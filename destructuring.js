// 
// const biodata = {
//     nama: "risano",
//     age: 17,
//     email: "risano@gmail.com",
//     alamat: {
//         jalan: "jl. kemana saja",
//         nomor: 19,
//         kel: "jati",
//         kec: "purwodadi"
//     }
// }

// tidak menggunakan destructuring
// const nama = biodata.nama
// const age = biodata.age
// console.log(age);
// const nama = "budi"
// const jalan = biodata.alamat.jalan
// console.log(jalan);



// menggunakan destructuring
// const {nama:name, age} = biodata
// const {jalan, nomor} = biodata.alamat

// console.log(name);
// console.log(jalan);



// descruturing array

const hobies = ['ngoding', 'gaming', 'joging']

// const hobi1 = hobies[0]
// const hobi2 = hobies[1]
// const hobi3 = hobies[2]

// console.log(hobi3);

const [hobi,hobi2, hobi3] = hobies

console.log(hobi3);

