var twoSum = function (nums, target) {
  let index1 = 0;
  let index2 = 0;

  for (let i = 0; i < nums.length; i++) {
    index1 = i;
    for (let j = i + 1; j < nums.length; j++) {
      index2 = j;
      if (nums[i] + nums[j] === target) {
        return [index1, index2];
      }
    }
  }
  return "no such pair found";
};
const nums1 = [2, 7, 11, 15];
const target1 = 9;

const nums2 = [3, 2, 4];
const target2 = 6;

const nums3 = [3, 0, 1];
const target3 = 6;

let result1 = twoSum(nums1, target1);
console.log("The index of the two numbers are ", result1);
let result2 = twoSum(nums2, target2);
console.log("The index of the two numbers are ", result2);
let result3 = twoSum(nums3, target3);
console.log("The index of the two numbers are ", result3);
