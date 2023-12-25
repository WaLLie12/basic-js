const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let num = 0
  const rows = matrix.length
  const column = matrix[0].length

  for (let i = 0; i < column; i++) {
    let zeroValue = false

    for (let j = 0; j < rows; j++) {
      const element = matrix[j][i]

      if (zeroValue) {
        continue;
      }

      if (element === 0) {
        zeroValue = true
      } else {
        num += element
      }
    }
  }

  return num
}

module.exports = {
  getMatrixElementsSum
};
