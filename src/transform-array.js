const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];
  let x = 0;

  if (!(Array.isArray(arr))) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr.includes('--double-next') && !arr.includes('--double-prev')
    && !arr.includes('--discard-next') && !arr.includes('--discard-prev')){
      return arr
    }


    for (let i = 0; i < arr.length; i++) {

      if (arr[i] === '--double-next') {
        if (arr[i + 1]) {
          result.push(arr[i + 1])
        }
      }

      else if (arr[i] === '--double-prev') {
        if (arr[i - 1] && result[result.lenghth - 1] === arr[i - 1]) {
          result.push(arr[i - 1])
        }
      }

      else if (arr[i] === '--discard-next') {
        if (arr[i + 1]) {
          i = i+2
        }
        // return result.push(arr[i+2])
      }

      else if (arr[i] === '--discard-prev') {
        if (arr[i - 1] && result[result.lenghth - 1] === arr[i - 1]) {
          result.pop()
        }
        // Array.from(arr).splice(i-1, 1)
        // i++
      } else {
        result.push(arr[i])
      }

    }



  return result
}

module.exports = {
  transform
};
