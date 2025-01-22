function isPrime(n:number): void{
    let prime:boolean = true; // let's assume that number is prime

    for (let i:number = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;  // number is not prime
            break;
        }
    }
    if (prime == true) {
        console.log(`${n} is a prime number`);
    }
    else {
        console.log(`${n} is not a prime number`);
    }
}

isPrime(11);