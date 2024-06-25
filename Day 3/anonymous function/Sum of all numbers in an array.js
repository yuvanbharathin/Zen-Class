
var numbers = [10, 20, 30, 45, 55];

var totalSum = (function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
})(numbers);

console.log("Sum of all numbers:", totalSum);
