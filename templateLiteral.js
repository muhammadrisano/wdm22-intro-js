// const nama = "risano"

// sifat concate
// const result = 10 + "test"

// const text = "nama saya adalah "+ nama
// console.log(text);

// soal: buatlah sebuat text 
/*
nilai ipa saya adalah 80
nilai ips saya adalah 70
dan rata-rata dari kedua nilai 75

*/

const ipa = 80
const ips = 90

// menggunakna concate

const text1 = "nilai ipa saya adalah "+ipa+ "\n"
+"nilai ips saya adalah "+ips + "\n" 
+ "dan rata-rata dari kedua nilai "+ ((ipa +ips) / 2)

// console.log(text1);

const text2 = `nilai ipa saya adalah ${ipa}
nilai ips saya adalah ${ips}
dan rata-rata dari kedua nilai ${(ipa + ips) / 2}`

console.log(text2);
