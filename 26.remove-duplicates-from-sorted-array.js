/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let length = 1;
  let num = 0;

  for (let index = 1; index < nums.length && num < nums.length; index++) {
    num++;
    if (nums[index] === nums[index - 1]) {
      nums.push(nums[index]);
      nums.splice(index, 1);
      index--;
    } else {
      if (num < nums.length) {
        length++;
      }
    }
  }

  console.log(nums, "---nums");

  return length;
};

var removeDuplicates1 = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let length = 0; // 等于是存储的不重复元素的下标

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== nums[index - 1]) {
      length++;
      nums[length] = nums[index]; // 只需要把不重复的元素移动到前面即可，不用管后面的元素
    }
  }

  console.log(nums, "---nums");

  return length + 1;
};

console.log(removeDuplicates([]), "---removeDuplicates([1])");
// console.log(removeDuplicates([1]), "---removeDuplicates([1])");
// console.log(removeDuplicates([1, 2]), "---removeDuplicates([1, 2])");
// console.log(removeDuplicates([1, 1]), "---removeDuplicates([1, 1])");
// console.log(removeDuplicates([1, 1, 2]), "---removeDuplicates([1,1,2])");
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), "---removeDuplicates([0,0,1,1,1,2,2,3,3,4])");

console.log(removeDuplicates1([]), "---removeDuplicates([1])");
console.log(removeDuplicates1([1]), "---removeDuplicates([1])");
console.log(removeDuplicates1([1, 2]), "---removeDuplicates([1, 2])");
console.log(removeDuplicates1([1, 1]), "---removeDuplicates([1, 1])");
console.log(removeDuplicates1([1, 1, 2]), "---removeDuplicates([1,1,2])");
console.log(removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), "---removeDuplicates([0,0,1,1,1,2,2,3,3,4])");
