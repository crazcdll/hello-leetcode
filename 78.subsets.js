/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(...calcBefore(result, nums[i]));
  }
  result.push([]);

  return result;
};

var calcBefore = function(array, num) {
  const result = [];

  result.push([num]);

  for (let i = 0; i < array.length; i++) {
    result.push([...array[i], num]);
  }

  return result;
};

console.log(subsets([1, 2, 3, 4]), "---subsets()");
