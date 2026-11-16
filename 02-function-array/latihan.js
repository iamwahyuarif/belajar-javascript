// Jawaban latihan modul 02. Soal lengkap ada di soal.md

// Soal 1
function cariTerbesar(angka) {
  // TODO
}

// Soal 2
function jumlahGenap(angka) {
  // TODO
}

// Soal 3
function hitungHuruf(kata, huruf) {
  // TODO
}

// Soal 4
function balikKata(kata) {
  // TODO
}

// Soal 5 (tantangan)
function hitungStatus(daftarSite, status) {
  // TODO
}

// ---- Uji: ganti tanda tanya dengan tebakanmu dulu sebelum menjalankan ----
console.log(cariTerbesar([4, 9, 2, 7]), "harusnya 9");
console.log(cariTerbesar([15, 3, 8]), "harusnya 15");
console.log(cariTerbesar([1, 2, 30]), "harusnya 30");

console.log(jumlahGenap([1, 2, 3, 4]), "harusnya 6");
console.log(jumlahGenap([5, 7, 9]), "harusnya 0");

console.log(hitungHuruf("banana", "a"), "harusnya 3");
console.log(hitungHuruf("kabel", "z"), "harusnya 0");

console.log(balikKata("halo"), "harusnya olah");
console.log(balikKata("a"), "harusnya a");

const daftarSite = [
  { nama: "Site A", status: "pending" },
  { nama: "Site B", status: "done" },
  { nama: "Site C", status: "pending" },
];
console.log(hitungStatus(daftarSite, "pending"), "harusnya 2");
console.log(hitungStatus(daftarSite, "close"), "harusnya 0");
