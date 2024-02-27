//Write a JavaScript function that checks whether a passed string is palindrome or not?

function Palindrome(string) {
    const len = string.length;
   for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return `${string} It is a palindrome`;
}
const value = Palindrome("malayalam");
console.log(value);