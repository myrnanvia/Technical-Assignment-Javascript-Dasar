/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 2; i <= 100; i++) {
    let c = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            c = false;
            break;
        }
    }
    if (c) {
        console.log(i);
    }
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop

let primeCounter = 0;
const fiftiethPrime = num => {
    let i, primes = [2, 3],
        n = 5
    const isPrime = n => {
        let i = 1,
            p = primes[i],
            limit = Math.ceil(Math.sqrt(n))
            /// EDIT HERE
        while (p <= limit) {
            if (n % p === 0) {
                return false
            }
            i += 1
            p = primes[i]
        }
        return true
    }
    for (i = 2; i <= num; i += 1) {
        while (!isPrime(n)) {
            n += 2
        }
        primes.push(n)
        n += 2
    }
    return primes[num - 1]
}
console.log(fiftiethPrime(50))




/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

let oddCounter = 0;
const fiftiethOdd = n;
do {
    (2 * n - 1)
}
while (n = 50)