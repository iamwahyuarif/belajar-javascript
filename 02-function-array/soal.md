# Soal Modul 02 - Function & Array

Aturan: tulis langkah dalam bahasa Indonesia dulu (komentar `//`), tebak output sebelum menjalankan, uji dengan minimal 3 kasus. Function harus **mengembalikan** nilai dengan `return`, bukan mencetak.

Jawab di file `latihan.js`.

## Soal 1 - `cariTerbesar(angka)`

Kembalikan angka terbesar dari array.

```js
cariTerbesar([4, 9, 2, 7]); // 9
cariTerbesar([15, 3, 8]);   // 15
cariTerbesar([1, 2, 30]);   // 30
```

Petunjuk: anggap `angka[0]` sebagai juara sementara, telusuri sisanya dengan `for`, ganti juara kalau ada yang lebih besar.

## Soal 2 - `jumlahGenap(angka)`

Kembalikan jumlah semua angka genap dalam array.

```js
jumlahGenap([1, 2, 3, 4]);  // 6
jumlahGenap([5, 7, 9]);     // 0
jumlahGenap([10, 20, 3]);   // 30
```

Petunjuk: angka genap itu `x % 2 === 0`. Siapkan variabel `total` yang mulai dari 0.

## Soal 3 - `hitungHuruf(kata, huruf)`

Kembalikan berapa kali sebuah huruf muncul dalam kata.

```js
hitungHuruf("banana", "a");  // 3
hitungHuruf("jaringan", "n"); // 2
hitungHuruf("kabel", "z");    // 0
```

Petunjuk: string bisa ditelusuri seperti array. `kata[0]` huruf pertama, `kata.length` panjangnya.

## Soal 4 - `balikKata(kata)`

Kembalikan kata yang dibalik.

```js
balikKata("halo");   // "olah"
balikKata("site");   // "etis"
balikKata("a");      // "a"
```

Petunjuk: bangun hasil dengan loop dari indeks terakhir (`kata.length - 1`) mundur ke 0, tambahkan tiap huruf ke variabel `hasil`.

## Soal 5 (tantangan, tema lapangan) - `hitungStatus(daftarSite, status)`

Diberikan array berisi objek site. Kembalikan berapa site yang berstatus tertentu.

```js
const daftarSite = [
  { nama: "Site A", status: "pending" },
  { nama: "Site B", status: "done" },
  { nama: "Site C", status: "pending" },
];

hitungStatus(daftarSite, "pending"); // 2
hitungStatus(daftarSite, "done");    // 1
hitungStatus(daftarSite, "close");   // 0
```

Petunjuk: ambil isi objek dengan titik, `daftarSite[i].status`. Kalau terasa baru, baca bab "Objects" di javascript.info bagian dasar saja.
