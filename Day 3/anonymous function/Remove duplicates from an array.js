var array = [1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 10];

var uniqueArray = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}(array);

console.log("Original array:", array);
console.log("Array with duplicates removed:", uniqueArray);
