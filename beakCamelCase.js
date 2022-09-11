function solution(string) {
  return string.replace(/([A-Z])/g, ` $1`);
}
console.log(solution("camelArwDAws"));

//solution('camelCasing'), 'camel Casing',
