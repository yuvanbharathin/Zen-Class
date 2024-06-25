const numbers = [10, 20, 30, 40, 50, 60];

const sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);

const totalSum = sumArray(numbers);
console.log("Sum of all numbers:", totalSum);
