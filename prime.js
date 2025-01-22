function isPrime(n) {
    var prime = true; // let's assume that number is prime
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false; // number is not prime
            break;
        }
    }
    if (prime == true) {
        console.log("".concat(n, " is a prime number"));
    }
    else {
        console.log("".concat(n, " is not a prime number"));
    }
}
isPrime(11);
