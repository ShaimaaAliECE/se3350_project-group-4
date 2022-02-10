// generate an random array of 
//(1) size 'count' 
//(2) a lower limit of 'min'
//(3) an upper limit of 'max'

export default function generateArray(count, min, max) {
  // declare empty array
  let result = [];
  // add 'count' amount of numbers 
  for (let i = 0; i < count; i++) {
    result.push(Math.floor(Math.random() * (max + 1 - min) + min));
  }
  return result;
}
