/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum > max) {
      max = sum;
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
};

// 反正就这么几个变量，依次想想每个是不是都能判断，都能遍历
var maxSubArray1 = function(nums) {
  let max = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }

    max = Math.max(sum, max);
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), "---maxSubArray");
console.log(maxSubArray([-2, 1]), "---maxSubArray");

console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]), "---maxSubArray");
console.log(maxSubArray1([-2, 1]), "---maxSubArray");
