/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 第一种解法，这个新创建了数组
var moveZeroes = function(nums) {
  let count = 0;
  nums = nums.filter(num => {
    if (num === 0) {
      count++;
      return false;
    } else {
      return true;
    }
  });
  // return [...nums, ...Array.from(new Array(count), (value, index) => 0)];
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
  console.log(nums, "---nums");
};

var moveZeroes1 = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }
  for (let j = count; j < nums.length; j++) {
    nums[j] = 0;
  }
  console.log(nums, "---nums");
};

var moveZeroes2 = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      if (count++ !== i) {
        nums[i] = 0;
      }
    }
  }
  console.log(nums, "eee---nums");
};

moveZeroes2([1]);
moveZeroes2([0, 0, 1]);
moveZeroes2([0, 1, 0, 3, 12]);
