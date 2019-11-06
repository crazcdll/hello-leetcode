/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (39.20%)
 * Likes:    403
 * Dislikes: 0
 * Total Accepted:    76.3K
 * Total Submissions: 194.5K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 *
 * 示例 1:
 *
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 *
 *
 * 示例 2:
 *
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释:
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 *
 * 说明:
 *
 *
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let temp;
  const length = nums.length;

  for (let index = 0; index < k; index++) {
    temp = nums[length - 1];
    nums.splice(length - 1, 1);
    nums.unshift(temp);
  }
  console.log(nums, "---nums");
};

var rotate1 = function(nums, k) {
  for (let index = 0; index < k; index++) {
    nums.unshift(...nums.splice(nums.length - 1, 1));
  }

  console.log(nums, "---nums");
};

var rotate2 = function(nums, k) {
  const length = nums.length;
  k = k % length;
  console.log(k, "---k");
  if (nums.length > 0) {
    console.log(nums.slice(0, nums.length - k), "---nums.slice(0, nums.length - k)");
    nums.push(...nums.slice(0, nums.length - k));
    nums.splice(0, length - k);
  }

  console.log(nums, "---rotate-arraynums");
};

var rotate3 = function(nums, k) {
  k = k % nums.length;
  let temp;

  const reverseNums = function(start, end) {
    while (start < end) {
      temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };

  reverseNums(0, nums.length - 1);
  reverseNums(0, k - 1);
  reverseNums(k, nums.length - 1);

  console.log(nums, "---nums");
};

// rotate([1, 2, 3, 4, 5, 6, 7], 3);
// rotate1([1, 2, 3, 4, 5, 6, 7], 3);
// rotate2([1], 1);
// rotate2([1, 2], 1);
// rotate2([1, 2, 3, 4, 5, 6, 7], 2);
// rotate2([1, 2, 3, 4, 5, 6, 7], 5);
// rotate2([1, 2], 3);
rotate3([1, 2], 3);
rotate3([1, 2, 3, 4, 5, 6, 7], 2);
// @lc code=end
