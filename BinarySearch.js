const binarySearch = function(search,value) {
    let left = 0;
    let right = search.length - 1;
    let middle;
    while(left <= right){
        middle = Math.floor((left+right)/2)
        if(value < search[middle]) right = middle - 1;
        else if(value > search[middle]) left = middle + 1;
        else return middle;
    }
    return null
}

console.log(
    binarySearch([1,2,3,4,5],5),
    binarySearch([1,2,3,4,5],6),
    binarySearch([1,2,3,4,5],2),
    binarySearch([1,2,3,4,5],1),
)