// Question 1:Non repeating character - You are given a string consisting of only lower case and upper-case English Alphabets and integers 0 to 9. Write a function that will take this string as Input and return the index of the first character that is non-repeating.

function findNonRepeatingCharacter(string){
    let repeat;
    for(let i=0;i<string.length;i++){
        repeat = false;
        for(let j=0;j<string.length;j++){
            if(string[i]===string[j] && i!==j){
                repeat = true;
                break;
            }
        }
        if(!repeat){
            return i;
        }
    }
    return null;
}
console.log(
    findNonRepeatingCharacter('aabbcc')
)

function findNonRepeatingCharacter2(string){
    let hashtable = {};
    for(let i=0; i<string.length;i++){
        if(hashtable.hasOwnProperty(string[i])) hashtable[string[i]]++
        else hashtable[string[i]] = 1;
    }
    for(let i=0;i<string.length;i++){
        if(hashtable[string[i]] == 1) return i;
    }
    return null;
}


console.log(
    findNonRepeatingCharacter2('aabzbcc')
)