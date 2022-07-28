// Question 1:Binary Search - Given an array of integers which is sorted in ascending order, and a target integer, write a function to search for whether the target integer is there in the given array. If it is there then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity

// Iterative
const binarySearchIterative = function(nums,target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while(left <= right){
        middle = Math.floor((left+right)/2)
        if(target < nums[middle]) right = middle - 1;
        else if(target > nums[middle]) left = middle + 1;
        else return middle;
    }
    return -1
}

console.log(
    binarySearchIterative([1,2,3,4,5],5),
    binarySearchIterative([1,2,3,4,5],6),
    binarySearchIterative([1,2,3,4,5],2),
    binarySearchIterative([1,2,3,4,5],1),
)


// Recursive
const binarySearchRecursive = function(nums,target){
    const helper = function(nums,target,left,right){
        // base case
        if(left > right) return -1;
        const middle = Math.floor((left+right)/2)
        if(target === nums[middle]) return middle;
        else if(target > nums[middle]) return helper(nums,target,middle+1,right) //only value of left changed 
        else return helper(nums,target,left,middle-1) // only value of right changed
    }
    return helper(nums,target,0,nums.length-1)
}

console.log(
    binarySearchRecursive([1,2,3,4,5],5),
    binarySearchRecursive([1,2,3,4,5],6),
    binarySearchRecursive([1,2,3,4,5],2),
    binarySearchRecursive([1,2,3,4,5],1),
)