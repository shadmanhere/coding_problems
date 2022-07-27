// Question 2:Palindrome-You are given a string. Write a function to check whether the string is a palindrome or not.

function isPalindrome(string) {
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
        if(i >= string.length - 1 - i) break;
    }
    return true
}

console.log(
    isPalindrome("okay"),
    isPalindrome("malayalam"),
    isPalindrome("ab"),
    isPalindrome("a"),
)