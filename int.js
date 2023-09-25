let ranArr = [1, 6, 6, 3, -1, 1, 6, 1];

function coupleSum(data) {
  let newArr = [];
  data.map((itm, idx) => {
    if (itm + data[idx + 1] == 7) {
      return newArr.push({ itm: data[idx + 1] });
    }
  });

  return newArr;
}

console.log(coupleSum(ranArr));
