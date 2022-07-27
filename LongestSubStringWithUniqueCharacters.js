// Question 1:Longest Unique char Substring - Given a string s, find the length of the longest substring without repeating characters.

function longestSubstring(string) {
    let max =0;
    let start = 0;
    const seen = {};
    for(let i=0; i< string.length; i++) {
        const char = string[i];
        if(char in seen) {
            start = Math.max(start, seen[char]+1);
        }
        max = Math.max(max, i-start+1);
        seen[char] = i;
    }
    return max;
}

console.log(
    longestSubstring("abansnjbkbcsb")
)