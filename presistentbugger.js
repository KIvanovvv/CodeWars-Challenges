// function persistence(num) {
//   let numString = String(num);
//   let numL = numString.length;
//   let currentSum = 1;
//   let currentSumString = "";
//   let multiplyCounter = 0;
//   for (let i = 0; i < numL; i++) {
//     if (numL > 1) {
//       multiplyCounter++;
//       for (let j = 0; j < numL; j++) {
//         currentSum *= Number(numString[j]);
//       }
//     } else {
//       currentSum = numString;
//       break;
//     }
//     currentSumString = String(currentSum);
//     numL = currentSumString.length;
//     numString = String(currentSum);
//     currentSum = 1;
//     if (numL > 1) {
//       i -= 1;
//     }
//   }
//   return multiplyCounter;
// }

function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}
console.log(persistence(999));
