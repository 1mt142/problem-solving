/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let arr1 = s.split("");
  let arr2 = t.split("");
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((value, index) => value === arr2[index]);
};

console.log(isAnagram("acc", "acc"));
