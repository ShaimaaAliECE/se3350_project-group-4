import Algorithm from "./abstractAlgorithm.mjs";

class MergeSort extends Algorithm {}

//The function that is called
MergeSort.prototype.sort = function (array, order, orderS, instruction, flag, level1Flag) {
  //Determine if array needs to be cut in half
  if (array.length < 2) {
    return array;
  }

  //Track iteration
  order.push("" + array);
  orderS.push("" + array);
  if (array.length != 10){
    instruction.push("Derive this half: [" + array + "]");
  }
  if (array.length == 2) {
    instruction.push("Sort this array: [" + array + "]");
  }
  //Record single digit arrays using a flag
  if (flag) {
    order.push("" + array[0]);
    instruction.push("Store the " + array[0]);
    flag = false;
  }

  //Half the given array
  const middle = Math.floor(array.length / 2);

  const array_left = array.slice(0, middle);
  const array_right = array.slice(middle, array.length);

  if (array_right.length === 3) {
    flag = true;
  }

  //Send array back to determine if it needs to be halved again
  const sort_left = this.sort(array_left, order, orderS, instruction, null, level1Flag);
  const sort_right = this.sort(array_right, order, orderS, instruction, flag, level1Flag);

  //Merge the masses!!!
  return this.merge(sort_left, sort_right, order, instruction, level1Flag);
};

//To merge arrays backtogether
MergeSort.prototype.merge = function (left, right, order, instruction, flag) {
  let arr = [];

  const tempL = JSON.parse(JSON.stringify(left));
  const tempR = JSON.parse(JSON.stringify(right));

  let tempInst = [];

  //Add the smaller leading value to the sorted array
  while (left.length && right.length) {
    tempInst.push(
      "Comparing " +
        left[0] +
        " and " +
        right[0] +
        ", push " +
        (left[0] < right[0] ? left[0] : right[0]) +
        " to parent array"
    );
    arr.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  //Add the rest of the array
  while (left.length) {
    tempInst.push("Push the rest of the array: " + left[0]);
    arr.push(left.shift());
  }

  //Add the rest of the array
  while (right.length) {
    tempInst.push("Push the rest of the array: " + right[0]);
    arr.push(right.shift());
  }

  // console.log(arr);
  //Track iteration
  order.push("" + arr);
  // instruction.push(
  //   "Combine [" + tempL + "] and [" + tempR + "] in order to get [" + arr + "]."
  // );

  if (!flag) {
    while (tempInst.length) {
      instruction.push(tempInst.shift());
    }
  } else if (arr.length != 2){
    instruction.push(
      "Combine [" + tempL + "] and [" + tempR + "] in order to get [" + arr + "]."
    );
  }

  return arr;
};

// Template on how to use the above class

// var sorting = new MergeSort(1, 20, 10);
// let order = [];
// let instruction = [];
// let sorted = sorting.sort(sorting.getArray(), order, [], instruction, false);

// console.log(order);
// console.log(instruction);

export default MergeSort;
