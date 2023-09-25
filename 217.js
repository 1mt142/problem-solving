/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (nums.length !== new Set(nums).size) {
    return true;
  }
  return false;

  //  return (new Set(array)).size !== array.length;
};
