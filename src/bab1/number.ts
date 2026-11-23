// deklarasi variabel number 
const nilaiMatematika: number = 85
const nilaiIndonesia: number = 90
const nilaiInggris: number = 78
const jumlahMapel: number = 3

// operasi aritmatika
const totalNilai: number = nilaiMatematika + nilaiInggris + nilaiIndonesia
const rataRata: number = totalNilai / jumlahMapel

console.log("=== LAPORAN NILAI ===")
console.log("Matematika  : ", nilaiMatematika)
console.log("Indonesia   : ", nilaiIndonesia)
console.log("Ingris      : ", nilaiInggris)
console.log("Total Nilai : ", totalNilai)
console.log("Rata - rata : ", rataRata)

// operasi tambahan 
const nilaiDibulatkan: number = Math.round(rataRata)
const nilaiMaksimum: number = Math.max(nilaiMatematika, nilaiIndonesia, nilaiInggris)
const nilaiMinimum: number = Math.min(nilaiMatematika, nilaiIndonesia, nilaiInggris)

console.log("---------------------")
console.log("Dibulatkan : ", nilaiDibulatkan)
console.log("Nilai Max  : ", nilaiMaksimum)
console.log("Nilai Min  : ", nilaiMinimum)