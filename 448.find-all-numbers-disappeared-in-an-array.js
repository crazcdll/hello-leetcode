/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const length = nums.length;
  const result = [];
  for (let i = 1; i < length + 1; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }
  return result;
};

var findDisappearedNumbers1 = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1]);
  }
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
  console.log(nums);
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers1([4, 3, 2, 7, 8, 2, 3, 1]));
