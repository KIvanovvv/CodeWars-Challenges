`use strict`;
function longestConsec(arr, k) {
  let longestStr = "";
  if (k <= 0 || k > arr.length) {
    return ``;
  }
  arr.forEach((el, i) => {
    let currStr = arr.slice(i, k + i).join("");
    if (longestStr.length < currStr.length) {
      longestStr = currStr;
    }
  });

  return longestStr;
}
console.log(
  longestConsec(["zoneahg", "abigail", "theta", "formasd", "libwe", "zas"], 4)
);
// testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")

function longestConsec(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}
