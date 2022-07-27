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

function isPalindrome2(string) {
    let i=0;
    let j=string.length - 1;
    while(i<=j){
        if(string[i] !== string[j]) return false;
        else {
            i++;
            j--
        }
    }
    return true;
}

console.log(
    isPalindrome2("okay"),
    isPalindrome2("malayalam"),
    isPalindrome2("ab"),
    isPalindrome2("a"),
)