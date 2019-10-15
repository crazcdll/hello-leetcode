/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//   nums1 = Array.from(new Set(nums1));
//   nums2 = Array.from(new Set(nums2));
//   const length1 = nums1.length;
//   const length2 = nums2.length;

//   const result = [];
//   if (length1 === 0 || length2 === 0) {
//     return [];
//   }
//   if (length1 <= length2) {
//     nums1.forEach(num1 => {
//       if (nums2.includes(num1)) {
//         result.push(num1);
//       }
//     });
//   } else {
//     nums2.forEach(num2 => {
//       if (nums1.includes(num2)) {
//         result.push(num2);
//       }
//     });
//   }

//   return result;
// };

// var intersection = function(nums1, nums2) {
//   var arr = [];
//   nums1.forEach(num => {
//     if (nums2.includes(num)) {
//       arr.push(num);
//     }
//   });
//   arr = Array.from(new Set(arr));
//   return arr;
// };

var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);

  const result = new Set();

  nums2.forEach(value => {
    if (set1.has(value) && !result.has(value)) {
      result.add(value);
    }
  });

  return [...result];
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
