function solution(string) {
  let indexArr = [];
  let startIndex = 0;
  let resultArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      indexArr.push(i);
    }
  }
  indexArr.forEach((el) => {
    let currWord = string.slice(startIndex, el);
    startIndex = el;
    resultArr.push(currWord);
  });
  resultArr.push(string.slice(startIndex));
  return resultArr.join(" ");
}
console.log(solution("camelArwDAws"));

//solution('camelCasing'), 'camel Casing',
