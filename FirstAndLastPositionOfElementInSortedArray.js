// Question 1:Find First and Last Position of Element in Sorted Array-You are given an array of integers sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.
 const search = function (array,target) {
    const leftExtreme = findLeftExtreme(array,target);
    const rightExtreme = findRightExtreme(array,target);
    return [leftExtreme, rightExtreme];
 }

 const findLeftExtreme = function (array,target) {
    let left = 0;
    let right = array.length - 1;
    let middle;
    while(left<=right) {
        middle = Math.floor((left + right) / 2);
        if(target === array[middle]) {
            if(middle === 0) return middle;
            if(array[middle - 1] === target) right = middle - 1;
            else return middle;
        } else if(target < array[middle]){
            right = middle + 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
 }

 const findRightExtreme = function(array,target){
    let left = 0;
    let right = array.length - 1;
    let middle;
    while(left<=right){
        middle = Math.floor((left + right) / 2);
        if(target===array[middle]){
            if(middle === array.length - 1) return middle;
            if(array[middle+1] === target) left = middle + 1;
            else return middle;
        } else if(target<array[middle]){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
 }

 console.log(
    search([1,2,3,4,5,5,5,5,6,7],5),
    search([1,2,3,3,3,3,3,4,5,6,7],3)
 )