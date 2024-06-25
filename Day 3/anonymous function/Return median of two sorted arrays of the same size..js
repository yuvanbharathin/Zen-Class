var findPalindromes = function(strings) {
    var palindromes = [];

    var isPalindrome = function(str) {
        var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        var reversedStr = cleanStr.split('').reverse().join('');
        return cleanStr === reversedStr;
    };

    for (var i = 0; i < strings.length; i++) {
        if (isPalindrome(strings[i])) {
            palindromes.push(strings[i]);
        }
    }

    return palindromes;
};

var words = ["madam", "hello", "racecar", "level", "mivan", "radar"];
var palindromeWords = findPalindromes(words);
console.log("Palindromes:", palindromeWords);
