/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let len = 0;
  let max = nums[0];
  let firstIndex = -1;

  if (nums.length === 2) {
    if (nums[0] > nums[1]) {
      len = 2;
    }
  } else if (nums.length > 2) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i + 1] > nums[i]) {
        if (nums[i + 1]) {
          max = nums[i + 1];
          if (nums[i] < max) {
            len = i - firstIndex;
          }
        }
      } else {
        if (firstIndex === -1) {
          firstIndex = i;
        }
        len = i - firstIndex;
      }
    }
  }
  return len;
};

var findUnsortedSubarray1 = function(nums) {
  // const sortedNums = JSON.parse(JSON.stringify(nums.sort((a, b) => a - b)));
  const sortedNums = nums.slice(0).sort((a, b) => a - b);
  let start = sortedNums.length;
  let end = 0;

  console.log(nums, "---nums");
  console.log(sortedNums, "---sortedNums");

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sortedNums[i]) {
      start = Math.min(i, start);
      end = Math.max(end, i);
    }
  }

  return end - start >= 0 ? end - start + 1 : 0;
};

// console.log(
//   findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]),
//   "---findUnsortedSubarray"
// );

// console.log(findUnsortedSubarray([2]), "---findUnsortedSubarray");
// console.log(findUnsortedSubarray([1, 2]), "---findUnsortedSubarray");
// console.log(findUnsortedSubarray([2, 1]), "---findUnsortedSubarray");
// console.log(findUnsortedSubarray([3, 2, 1]), "---findUnsortedSubarray");
// console.log(findUnsortedSubarray([1, 2, 3]), "---findUnsortedSubarray");

console.log(
  findUnsortedSubarray1([2, 6, 4, 8, 10, 9, 15]),
  "---findUnsortedSubarray1"
);

// console.log(findUnsortedSubarray1([2]), "---findUnsortedSubarray1");
// console.log(findUnsortedSubarray1([1, 2]), "---findUnsortedSubarray1");
// console.log(findUnsortedSubarray1([2, 1]), "---findUnsortedSubarray1");
// console.log(findUnsortedSubarray1([3, 2, 1]), "---findUnsortedSubarray1");
// console.log(findUnsortedSubarray1([1, 2, 3]), "---findUnsortedSubarray1");
