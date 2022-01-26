export default class Algorithm{
    constructor(){
        //Make sure the constructor is not the Algorithm class.
        if (this.constructor === Algorithm) {
            throw new Error("Instantiating an abstract class is a no no.")
        }
    }
}

//Create the protortype for sort, every sorting algorithm will use this to start the sort
Algorithm.prototype.sort = function(){
    throw new Error("This is an abstract method man.... come on bro.")
}
