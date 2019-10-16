/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [];
// };

var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const completion = map[nums[i]];
    if (completion != undefined) {
      return [completion, i];
    }
    map[target - nums[i]] = i;
  }
};

console.log(twoSum([7, 11, 2, 15], 9));
