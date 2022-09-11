function count(string) {
  let obj = {};
  for (let chr of string) {
    obj[chr] = (obj[chr] || 0) + 1;
  }
  return obj;
}
console.log(count(`abcbacc`));
