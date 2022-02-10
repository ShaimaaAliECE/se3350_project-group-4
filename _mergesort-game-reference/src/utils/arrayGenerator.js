/**
 * Generates an array of specified length with integers inside of a specified range
 * @param {number} length Desired length of the output array
 * @param {number} min Minimum value of a number in the output array
 * @param {number} max Maximum value of a number in the output array
 * @returns The array of randomly generated integers
 */
export default function generateArray(length, min, max) {
    let outputArr = [];
    for (let i = 0; i < length; i++) {
        outputArr.push(Math.floor(Math.random() * (max + 1 - min) + min)); // Add random number within the specified min & max to the output array
    }
    return outputArr;
}