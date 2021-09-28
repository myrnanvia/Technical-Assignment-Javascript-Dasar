/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
    if (salary < 5000000) {
        console.log(0)
    } else if (salary < 10000000 && salary >= 5000000) {
        total = salary * (5 / 100);
        console.log(total);
    } else if (salary < 20000000 && salary >= 1000000) {
        total = salary * (10 / 100);
        console.log(total);
    } else if (salary >= 20000000) {
        total = salary * (20 / 100);
        console.log(total);
    } else {
        console.log("Masukkan gaji");
    }
    return total;
}

console.log(taxCalc(20000000));

/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height, weight) {
    bmi = (weight / (height * height)) * 10000;

    if (bmi < 18.5) {
        console.log("under weight");
    } else if (bmi < 24.9) {
        console.log("normal");
    } else if (bmi < 29.9) {
        console.log("over weight");
    } else if (bmi < 34.9) {
        console.log("obese");
    } else if (bmi > 35) {
        console.log("extremely obese");
    }

}

console.log(checkBMI(170, 80));

/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) {
    let separateWord = sentence.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}
console.log(convToUpperCase("hello bandung"));

/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
    if (word.length == 0) {
        return word;
    }
    // Define some auxiliary variable
    var size = word.length - 1;
    var auxiliary = size;
    var result = "";
    var task = false;
    // Execute loop until when size is less than zero
    while (size >= 0) {
        // Skip similar adjacent characters
        while (size >= 0 && word.charAt(auxiliary) == word.charAt(size)) {
            size--;
        }
        if (size + 1 == auxiliary) {
            // When adjacent are not same 
            // Then add new character at beginning of result
            result = word.charAt(auxiliary) + result;
        } else {
            // This is indicate string is modified
            task = true;
        }
        // Get new index
        auxiliary = size;
    }
    if (task) {
        return this.firstNonRepeatedChar(result);
    }
    return result;
}

console.log(firstNonRepeatedChar("alloha"));