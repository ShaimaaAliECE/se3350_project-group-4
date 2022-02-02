import Algorithm from "./abstractAlgorithm.mjs";

class MergeSort extends Algorithm {
  constructor(min, max, arraySize) {
    super(min, max, arraySize);
  }
}

//The function that is called
MergeSort.prototype.sort = function (array, trackSplit, trackMerge, tracker) {
  //Reset tracker if need be
  if (trackSplit.length === 0) tracker = 0;

  //Determine if array needs to be cut in half
  if (array.length < 2) return array;

  //Track iteration
  trackSplit.push(tracker + "|" + array);

  //Half the given array
  const middle = Math.floor(array.length / 2);
  const array_left = array.slice(0, middle);
  const array_right = array.slice(middle, array.length);

  //Send array back to determine if it needs to be halved again
  const sort_left = this.sort(array_left, trackSplit, trackMerge, tracker + 1);
  const sort_right = this.sort(
    array_right,
    trackSplit,
    trackMerge,
    tracker + 1
  );

  //Merge the masses!!!
  return this.merge(sort_left, sort_right, trackMerge, tracker);
};

//To merge arrays backtogether
MergeSort.prototype.merge = function (left, right, trackMerge, tracker) {
  let arr = [];

  //Add the smaller leading value to the sorted array
  while (left.length && right.length) {
    arr.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  //Add the rest of the array
  while (left.length) {
    arr.push(left.shift());
  }

  //Add the rest of the array
  while (right.length) {
    arr.push(right.shift());
  }

  //Track iteration
  trackMerge.push(tracker + "|" + arr);

  return arr;
};

var sorting = new MergeSort(1, 20, 10);
let split = [];
let merge = [];
let sorted = sorting.sort(sorting.getArray(), split, merge);

let storageSplit = [];
let storageMerge = [];
let temp = [];

for (let i = 0; i < split.length; i++) {
  let index = split[i].charAt(0);
  let data = split[i].slice(2);

  if (!temp.includes(index)) {
    storageSplit.push([[data]]);
    temp.push(index);
  } else {
    storageSplit[index].push([data]);
  }
}

let cap = storageSplit.length - 1;
temp = [];

for (let i = 0; i < merge.length; i++) {
  let index = cap - merge[i].charAt(0);
  let data = merge[i].slice(2);

  if (!temp.includes(index)) {
    storageMerge.push([[data]]);
    temp.push(index);
  } else {
    storageMerge[index].push([data]);
  }
}

console.log(storageSplit);
console.log("______________________________________");
console.log(storageMerge);

// export default MergeSort;
