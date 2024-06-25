const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;

    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
};

const primeNumbers = numbers.filter(num => isPrime(num));

console.log("Prime numbers in the array:", primeNumbers);
