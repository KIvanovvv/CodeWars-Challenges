function deleteNth(arr, x) {
  let obj = {};
  return arr.filter((el) => {
    obj[el] = (obj[el] || 0) + 1;
    return obj[el] <= x;
  });
}

console.log(deleteNth([20, 37, 20, 21], 1));
//([20,37,20,21], 1), [20,37,21])
