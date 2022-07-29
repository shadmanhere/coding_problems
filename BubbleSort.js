// Question 1:Bubble Sort - You are given an array of integers. Write a function that will take this array as input and return the sorted array using Bubble sort.

function bubbleSort(array){
    let sorted = false;
    let counter = 0;
    while(!sorted){
        sorted = true;
        for(let i = 0; i < array.length -1-counter; i++){
            if(array[i]>array[i+1]){
                swap(array,i);
                sorted = false;
            }
        }
        counter++
    }
    return array;
}

function swap(array,i){
    let temp = array[i];
    array[i]=array[i+1];
    array[i+1]=temp;
}

console.log(
    bubbleSort([3,2,5,9,10,1])
)