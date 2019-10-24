/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length;

  for (let i = 0; i < len; i++) {
    matrix.push([]);
    for (let j = 0; j < len; j++) {
      matrix[len + i].unshift(matrix[j][i]);
    }
  }

  matrix.splice(0, len);

  console.log(matrix, "---matrix");
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]);
