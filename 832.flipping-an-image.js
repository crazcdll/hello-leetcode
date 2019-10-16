/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// var flipAndInvertImage = function(A) {
//   console.log(A, "---A");
//   const B = A.map(item => item.reverse());
//   console.log(B, "---B");
//   const C = B.map(arr => arr.map(item => (item === 0 ? 1 : 0)));

//   console.log(C, "---C");
//   return C;
// };

var flipAndInvertImage = function(A) {
  return A.map(arr => arr.reverse().map(item => 1 - item));
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
console.log(
  flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])
);
