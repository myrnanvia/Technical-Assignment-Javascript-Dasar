/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error = TypeError terjadi ketika variabel ada, tetapi operasi yang dilakukan tidak sesuai untuk jenis nilai yang dikandungnya.
/// - Reference Error = ReferenceError terjadi saat mencoba menggunakan variabel yang tidak ada sama sekali.
/// - Range Error = RangeError dilemparkan jika menggunakan angka yang berada di luar rentang nilai legal.
/// - Syntax Error = SyntaxError muncul jika Anda mencoba mengevaluasi kode dengan kesalahan sintaks.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - akan terjadi error
/// - termasuk kedalam Reference Error
/// - karena variabel yang di defined dengan const sama seperti var, hoisting to the top. bedanya yaitu const tidak di inisialisasikan. jika menggunakan variabel const sebelum dideklarasikan akan menghasilkan ReferenceError.

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;