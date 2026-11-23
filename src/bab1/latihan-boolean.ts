const namaSiswa: string = "Rayhan"
const nilaipra: number = 87
const nilaiAkhir: number = 90

// syarat lulus
const nilaiPraMinim: number = 70
const nilaiAkhirMax: number = 85

const lulusUjian: boolean = nilaipra >= nilaiPraMinim
const nilaibagus: boolean = nilaiAkhir >= nilaiAkhirMax
const dinyatakanLulus: boolean = lulusUjian && nilaibagus

console.log(`=== HASIL AKHIR ===`)
console.log(`Nilai Pra      : ${nilaipra}`)
console.log(`Nilai Akhir    : ${nilaiAkhir}`)
console.log(`Nilai Minim    : ${nilaiPraMinim}`)
console.log(`Nilai Maximum  : ${nilaiAkhirMax}`)
console.log(`Dinyatakan     : ${dinyatakanLulus ? "LULUS" : "TIDAK LULUS"}`)

    