// Return all the prime numbers in an array
var findPrimes = function(numbers) {
    var primes = [];

    var isPrime = function(num) {
        if (num <= 1) {
            return false;
        }

        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };


    for (var j = 0; j < numbers.length; j++) {
        if (isPrime(numbers[j])) {
            primes.push(numbers[j]);
        }
    }

    return primes;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = findPrimes(numbers);
console.log("Prime numbers:", primeNumbers);