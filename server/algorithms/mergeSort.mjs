import Algorithm from "./abstractAlgorithm.mjs";

class MergeSort extends Algorithm {}

MergeSort.prototype.sort = function(array) {
    //Determine if array needs to be cut in half
    if (array.length <  2) return array

    console.log("Cutting: " + array)

    //Half given array
    const middle = Math.floor(array.length / 2)
    const array_left = array.slice(0, middle)
    const array_right = array.slice(middle, array.length)

    //Send array back to determine if it needs to be halved again
    const sort_left = this.sort(array_left)
    const sort_right = this.sort(array_right)
    
    //Merge the masses!!!
    return this.merge(sort_left, sort_right)
}

MergeSort.prototype.merge = function(left, right) {
    let arr = []

    //Add the smaller leading value to the sorted array
    while (left.length && right.length) {
        console.log("Merging: " + left + " || " + right)
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

    return arr
}

var asdf = new MergeSort()

console.log(asdf.sort([2,1,5,7,23,3,8,8,8,2,8]))