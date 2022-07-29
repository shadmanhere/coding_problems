// Question 2:Search in 2D Array-Write an efficient algorithm that searches for a value target in an m x n integer matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.

// The first integer of each row is greater than the last integer of the previous row.

// If the value is there in the matrix return true, else false.

const searchInMatrix = function(matrix, target) {
    const columns = matrix[0].length;
    const rows = matrix.length;
    // binary serach to identify the rows
    let top = 0;
    let bottom = rows-1;
    let middle;
    while(top<=bottom) {
        middle = Math.floor((top + bottom)/2);
        if(target<matrix[middle][0]) bottom = middle - 1;
        else if(target>matrix[middle][columns - 1]) top = middle + 1;
        else break;
    }
    if(top > bottom) return false;
    let left = 0;
    let right = columns -1;
    let midValue;
    while(left<=right){
        midValue = Math.floor((left+right)/2);
        if(target === matrix[middle][midValue]) return true;
        else if(target < matrix[middle][midValue]) right = midValue - 1;
        else left = midValue + 1;
    }
}

console.log(
    searchInMatrix([[1,2,3,4,5],[6,,7,8,9,10],[11,12,13,14,15]],11),
    searchInMatrix([[1,2,3,4,5],[6,,7,8,9,10],[11,12,13,14,15]],16)
)