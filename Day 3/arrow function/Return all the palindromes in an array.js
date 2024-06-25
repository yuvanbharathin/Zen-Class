const strings = ["hello", "madam", "racecar", "level", "world"];

const isPalindrome = str => {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

const palindromeStrings = strings.filter(str => isPalindrome(str));

console.log("Palindromes in the array:", palindromeStrings);
