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

var productExceptSelf1 = function(nums) {
  const output = [];
  const left = [1];
  const right = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    left.push(left[i - 1] * nums[i - 1]);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    output.push(left[i] * right[i]);
  }
  console.log(left, "---left");
  console.log(right, "---right");
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]), "---productExceptSelf()");
console.log(productExceptSelf1([1, 2, 3, 4]), "---productExceptSelf1()");
