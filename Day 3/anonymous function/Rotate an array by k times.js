var array = [1, 2, 3, 4, 5];
var k = 2; // Number of times to rotate the array

var rotatedArray = (function(arr, k) {
    k = k % arr.length;

    return arr.slice(k).concat(arr.slice(0, k));
})(array, k);

console.log("Original array:", array);
console.log("Array rotated by", k, "times:", rotatedArray);
