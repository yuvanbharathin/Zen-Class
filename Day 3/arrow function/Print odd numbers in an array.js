const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findOddNumbers = arr => arr.filter(num => num % 2 !== 0);

const oddNumbers = findOddNumbers(numbers);
console.log("Odd numbers in the array:", oddNumbers);
