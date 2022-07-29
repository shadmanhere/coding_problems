// Question 2:Insertion Sort -You are given an array of integers. Write a function that will take this array as input and return the sorted array using Insertion sort.

const insertionSort = function (array){
    for (let i = 1; i < array.length; i++){
        let j = i -1;
        let temp = array[i];
        while(j>=0 && array[j] > temp){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = temp;
    }
    return array;
}

console.log(
    insertionSort([4,3,2,1])
)