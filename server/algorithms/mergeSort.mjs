import Algorithm from "./abstractAlgorithm.mjs";

class MergeSort extends Algorithm {
    constructor(min, max, arraySize) {
        super(min, max, arraySize)
    }
}

//The function that is called 
MergeSort.prototype.sort = function(array, trackSplit, trackMerge, tracker) {
    if (trackSplit.length == 0) tracker = 0

    //Determine if array needs to be cut in half
    if (array.length <  2) return array

    trackSplit.push(tracker + "|" + array)
    
    //Half the given array
    const middle = Math.floor(array.length / 2)
    const array_left = array.slice(0, middle)
    const array_right = array.slice(middle, array.length)

    //Send array back to determine if it needs to be halved again
    const sort_left = this.sort(array_left, trackSplit, trackMerge, tracker + 1)
    const sort_right = this.sort(array_right, trackSplit, trackMerge, tracker + 1)
    
    //Merge the masses!!!
    return this.merge(sort_left, sort_right, trackMerge, tracker)
}

//To merge arrays backtogether
MergeSort.prototype.merge = function(left, right, trackMerge, tracker) {
    let arr = []
    
    //Add the smaller leading value to the sorted array
    while (left.length && right.length) {
        arr.push(left[0] < right[0] ? left.shift() : right.shift())
    }

    //Add the rest of the array
    while (left.length) {
        arr.push(left.shift())
    }

    //Add the rest of the array
    while (right.length){
        arr.push(right.shift())
    }
    
    trackMerge.push(tracker + "|" + arr)

    return arr
}

var split = []
var merge = []
var asdf = new MergeSort(1, 10, 10)

asdf.sort(asdf.getArray(), split, merge)

console.log(asdf.getArray())
console.log(split)
console.log(merge)