/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - ada 2 variable yaitu variable global dan local.
/// - Global variables adalah variabel yang dideklarasikan di luar blok. Local variable adalah variabel yang dideklarasikan di dalam suatu blok bisa berupa function-scoped atau block-scoped. 
/// - Local variable :
// dibagian ini variabel 'makanan' tidak dapat diakses
// function simpleFunction(){
//     var makanan = "Bakso";
//     // jika variabel 'makanan' ditaruh di dalam sini maka variabel 'makanan' dapat diakses
//   }
/// Global variable :
// var makanan = "Bakso";  
// disini kamu bisa menggunakan variabel 'makanan'
// function simpleFunction() {   
// disini kamu bisa menggunakan variabel 'makanan'
// }


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - Mariah
/// - karena menerima masukan baru dari fungsi printFirstName

const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));