/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let newArr = [];
  let prev = 0;

  for (let i = 0; i < nums.length; i++) {
    prev = prev + nums[i];
    newArr.push(prev);
  }
  return newArr;
};

runningSum([1, 2, 3, 4]);
