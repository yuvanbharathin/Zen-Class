// Convert all the strings to title caps in a string array

var stringArray = ["hello world", "learning full stack", "guvi is awesome"];

var titleCapsArray = (function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var words = arr[i].toLowerCase().split(' ');
        for (var j = 0; j < words.length; j++) {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
        }
        arr[i] = words.join(' ');
    }
    return arr;
})(stringArray);

console.log(titleCapsArray);
