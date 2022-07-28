// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while(left <= right) {
        middle = Math.floor((left+right)/2);
        if(target === nums[middle]) return middle;
        if(nums[left] <= nums[middle]) {
            // left part is sorted
            if(target>=nums[left] && target<=nums[middle]){
                // explore left part
                right = middle-1;
            } else {
                // explore right part
                left = middle+1;
            }
        } else {
            // right sorted
            if(target<=nums[right] && target>nums[middle]){
                // explore right part
                left = middle + 1;
            } else {
                // explore the left part
                right= middle - 1;
            }
        }

    }
    return -1;
}

console.log(
    search([4,5,6,7,0,1,2],0),
    search([4,5,6,7,0,1,2],5),
    search([4,5,6,7,0,1,2],10)
)