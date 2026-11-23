// \" = Tanda kutip Ganda
// \' = Tanda kutip Tunggal
// \\ = Backslash
// \n = Baris baru (newline)
// \t = Tab

const namaSiswa: string = "Dewi Rahayo"
const namaSekolah: string = "SMKS Antartika 1 Sidoarjo"
const jurusan: string = "Rekayasa Perangkat Lunak"
const kelas: string = "XI RPL 2"
const motto: string = "Belajar keras, kerja cerdas"

// panjang string
console.log("Nama Panjang: ", namaSiswa.length, "Karakter")

// Mengubah kapitalisasi
console.log("Huruf Besar semua: ", namaSiswa.toUpperCase())
console.log("Huruf Kecil Semua: ", namaSiswa.toLowerCase())

//memotong whitespace di kiri dan kanan 
let namaKotor: string = "   Budi    "
console.log("Sebelum Trim: ", namaKotor)
console.log("Sesudah Trim: ", namaKotor.trim())

// mencari teks di dalam string
console.log("Mengandung 'RPL':", jurusan.includes("RPL"))
console.log("Dimulai dengan 'Rekayasa':", jurusan.startsWith("Rekayasa"))

// Mengambil sebagian teks
console.log("3 karakter pertama nama: ", namaSiswa.slice(0, 3))

// Template literal
console.log(`
    === PROFIL SISWA ===
    Nama    : ${namaSiswa}
    Sekolah : ${namaSekolah}
    Jurusan : ${jurusan}
    Kelas   : ${kelas}
    Motto   : ${motto}
    `)

let teks = "Halo, Selamat Datang di TypeScript"

teks.length // 35 - panjang string
teks.toUpperCase() // TEKS BESAR SEMUA
teks.toLowerCase() // teks kecil semua
teks.trim() // Hapus spasi dari kiri dan kanan
teks.includes("TypeScript") // true - cek apakah mengandung teks
teks.startsWith("Halo") // True - dimulai dengan "Halo"
teks.endsWith("!") // true - diakhiri dengan "!"
teks.replace("Halo", "Hai") // mengganti halo dengan hai
teks.split(", ") // ["halo, " "selamat datang di typescript"]
teks.slice(6, 13) // "Selamat, " - ambil karakter dari indeks 6 ke 13
teks.indexOf("TypeScript") // 22 - posisi pertama di temuka