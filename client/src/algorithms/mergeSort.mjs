import Algorithm from "./abstractAlgorithm.mjs";

class MergeSort extends Algorithm {}

//The function that is called
MergeSort.prototype.sort = function (array, order, orderS, instruction, flag) {
  //Determine if array needs to be cut in half
  if (array.length < 2) {
    return array;
  }

  //Track iteration
  order.push("" + array);
  orderS.push("" + array);
  instruction.push("Half this array: [" + array + "]");

  //Record single digit arrays using a flag
  if (flag) {
    order.push("" + array[0]);
    orderS.push("" + array[0]);
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
  const sort_left = this.sort(array_left, order, instruction);
  const sort_right = this.sort(array_right, order, instruction, flag);

  //Merge the masses!!!
  return this.merge(sort_left, sort_right, order, instruction);
};

//To merge arrays backtogether
MergeSort.prototype.merge = function (left, right, order, instruction) {
  let arr = [];

  const tempL = JSON.parse(JSON.stringify(left));
  const tempR = JSON.parse(JSON.stringify(right));

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
  order.push("" + arr);
  instruction.push(
    "Combine [" + tempL + "] and [" + tempR + "] in order to get [" + arr + "]."
  );

  return arr;
};

//Template on how to use the above class

// var sorting = new MergeSort(1, 20, 10);
// let order = [];
// let instruction = [];
// let sorted = sorting.sort(sorting.getArray(), order, instruction, false);

// console.log(order);
// console.log(instruction);

export default MergeSort;
