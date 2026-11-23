const namaLengkap: string = "Muhammad Rayhan Zahir Al Baihaqi"
const namaSekolah: string = "SMKS ANTARTIKA 1 SIDOARJO"

console.log("Nama Saya Besar Semua: ", namaLengkap.toUpperCase())
console.log("Panjang Nama Saya: ", namaLengkap.length, "Karakter")
console.log("3 Karakter pertama Namaku: ", namaLengkap.slice(0, 3))

// template literal
console.log(`Nama saya ${namaLengkap}, saya bersekolah di ${namaSekolah} `)