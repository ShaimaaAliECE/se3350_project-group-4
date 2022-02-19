export default class Algorithm {
  constructor(min, max, arraySize) {
    //Make sure the constructor is not the Algorithm class.
    if (this.constructor === Algorithm) {
      throw new Error("Instantiating an abstract class is a no no.");
    } else {
      //Use the constructor to generate an array, use the indicated min, max, and size
      let array = [];

      for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * (max - min)) + min);
      }

      this.array = array;
    }
  }
}

//Create the prototype for sort, every sorting algorithm will sort, so this will be overwritten.
Algorithm.prototype.sort = function () {
  throw new Error("This is an abstract method.... come on bro.");
};

//Return the array. This is the array that is to be sorted. This will not be overwritten.
Algorithm.prototype.getArray = function () {
  return this.array;
};
