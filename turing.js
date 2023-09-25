function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY;
  console.log(max_num);
  for (let num of nums) {
    if (num > max_num) {
      max_num = num; // answer
    }
  }

  return max_num;
}

console.log(find_max([1, 2, 3, 45, 7]));
