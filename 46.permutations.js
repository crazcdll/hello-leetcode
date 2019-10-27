/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let temp = [];

    if (result.length === 0) {
      temp.push([num]);
    } else {
      for (let j = 0; j < result.length; j++) {
        const element = result[j];
        temp.push([...element, num]);
        for (let k = 0; k < element.length; k++) {
          temp.push([...element.slice(0, k), num, ...element.slice(k)]);
        }
      }
    }

    result = temp;
  }

  return result;
};

var permute1 = function(nums) {
  const result = [];
  const length = nums.length;
  recursive(nums, 0);
  return result;

  function recursive(nums, n) {
    if (n === length) {
      result.push(nums);
    }
    for (let i = n; i < length; i++) {
      [nums[i], nums[n]] = [nums[n], nums[i]];

      recursive(nums.concat(), n + 1);

      [nums[i], nums[n]] = [nums[n], nums[i]];
    }
  }
};

console.log(permute([0, 1, 2]), "---permute");
console.log(permute1([0, 1, 2]), "---permute1");
