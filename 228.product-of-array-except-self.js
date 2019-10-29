/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const output = [];
  let k = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = k;
    k = k * nums[i]; // 此时数组存储的是除去当前元素左边的元素乘积
  }
  k = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= k;
    console.log(k, "---k");
    k *= nums[i]; // k为该数右边的乘积。
    console.log(k, "---k"); // 此时数组等于左边的 * 该数右边的。
  }
  console.log(output, "---output");
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]), "---productExceptSelf()");
