// Question 2:Group Anagrams - Given an array of strings consisting of lower case English letters, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

const groupAnagrams = function(strings){
    const sorted = strings.map(x=>x.split('').sort().join(''));
    const hashtable = {};
    for(let i=0; i<strings.length; i++){
        if(!hashtable[sorted[i]]) hashtable[sorted[i]] = [strings[i]];
        else hashtable[sorted[i]].push(strings[i]);
    }
    return Object.values(hashtable);
}

let strings = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat', 'tab']
console.log(
    groupAnagrams(strings)
)