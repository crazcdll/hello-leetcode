/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const time = Math.floor(nums.length / 2);
  const arr = new Map();

  nums.forEach(num => arr.set(num, arr.get(num) ? arr.get(num) + 1 : 1));

  let result = null;

  arr.forEach((value, key, map) => {
    if (value > time) {
      result = key;
    }
  });

  return result;
};

var majorityElement1 = function(nums) {
  const time = Math.floor(nums.length / 2);
  const arr = new Map();

  let result = null;

  nums.forEach(num => {
    let value = arr.get(num);
    value = value ? value + 1 : 1;
    arr.set(num, value);

    if (value > time) {
      result = num;
    }
  });

  return result;
};

// 因为题干说了，众数是个数大于 二分之一 的，可以利用这一点
var majorityElement2 = function(nums) {
  let count = 0;
  let current;

  nums.forEach(num => {
    // 如果 value === 0 就换当前值
    if (count === 0) {
      current = num;
    }
    if (num === current) {
      count += 1;
    } else {
      count += -1;
    }
  });

  return current;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement1([3, 2, 3]));
console.log(majorityElement2([3, 3, 4]));
