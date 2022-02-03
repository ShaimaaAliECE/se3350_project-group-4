import Algorithm from "./abstractAlgorithm.mjs";

class MergeSort extends Algorithm {}

//The function that is called
MergeSort.prototype.sort = function (
  array,
  trackSplit,
  trackMerge,
  order,
  tracker,
  flag
) {
  //Reset tracker if need be
  if (trackSplit.length === 0) tracker = 0;
  // trackSplit.push(tracker + "|" + array);

  if (flag) {
    trackSplit.push(tracker + 1 + "|" + array[0]);
    order.push(["" + array[0]]);
    flag = false;
  }

  //Determine if array needs to be cut in half
  if (array.length < 2) {
    // console.log(tracker - 1 + "|" + array);
    return array;
  }
  //Track iteration
  trackSplit.push(tracker + "|" + array);
  order.push("" + array);
  instruction.push("Split " + arr + " into " + arrR arrL)
  // console.log(tracker + "|" + array);

  //Half the given array
  const middle = Math.floor(array.length / 2);
  // console.log(array);
  const array_left = array.slice(0, middle);
  const array_right = array.slice(middle, array.length);

  if (array_right.length === 3) {
    let tempL = array_right.slice(0, 1);
    flag = true;
  }
  // console.log(array_left);
  // console.log(array_right);

  //Send array back to determine if it needs to be halved again
  const sort_left = this.sort(
    array_left,
    trackSplit,
    trackMerge,
    order,
    tracker + 1
  );
  const sort_right = this.sort(
    array_right,
    trackSplit,
    trackMerge,
    order,
    tracker + 1,
    flag
  );

  //Merge the masses!!!
  return this.merge(sort_left, sort_right, trackMerge, order, tracker);
};

//To merge arrays backtogether
MergeSort.prototype.merge = function (left, right, trackMerge, order, tracker) {
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

  // console.log(arr);
  //Track iteration
  order.push(arr);
  trackMerge.push(tracker + "|" + arr);

  return arr;
};

// var sorting = new MergeSort(1, 20, 10);
// let split = [];
// let merge = [];
// let order = [];
// let sorted = sorting.sort(sorting.getArray(), split, merge, order, false);

// console.log(order);

// let storageSplit = [];
// let storageMerge = [];
// let temp = [];

// // console.log(split);

// for (let i = 0; i < split.length; i++) {
//   let index = split[i].charAt(0);
//   let data = split[i].slice(2);

//   if (!temp.includes(index)) {
//     storageSplit.push([[data]]);
//     temp.push(index);
//   } else {
//     storageSplit[index].push([data]);
//   }
// }

// temp = [];

// for (let i = merge.length - 1; i >= 0; i--) {
//   let index = merge[i].charAt(0);
//   let data = merge[i].slice(2);

//   if (!temp.includes(index)) {
//     storageMerge.push([[data]]);
//     temp.push(index);
//   } else {
//     storageMerge[index].push([data]);
//   }
// }

// storageMerge.reverse();
// for (let i = 0; i < storageMerge.length; i++) storageMerge[i].reverse();

// console.log(storageSplit);
// console.log("______________________________________");
// console.log(storageMerge);

export default MergeSort;
