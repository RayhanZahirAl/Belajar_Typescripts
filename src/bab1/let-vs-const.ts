// contoh penggunaan let - nilai bisa berubah
let skorGame: number = 0
console.log("Skor awal:", skorGame);

skorGame = skorGame + 100
console.log("Skor setelah level 1:", skorGame)

skorGame = skorGame + 250
console.log("Skor setelah level 2:", skorGame)

// contoh penggunaan const - nilai tetap
const MAX_NILAI: number = 100
const NAMA_APLIKASI: string = "Sistem Nilai SMK"
const VERSI: string = "1.0.0"

console.log("=====================")
console.log("Aplikasi:", NAMA_APLIKASI)
console.log("Versi:", VERSI)
console.log("Nilai maksimum:", MAX_NILAI)