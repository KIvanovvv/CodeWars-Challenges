function solution(str) {
  const pattern = /[A-Za-z]{1,2}/g;
  let matches = str.match(pattern);
  if (matches !== null) {
    let lastChar = matches.slice(-1).join("");
    if (lastChar.length === 1) {
      lastChar += `_`;
    }
    matches.splice(-1);
    matches.push(lastChar);
  } else {
    matches = [];
  }
  return matches;
}

console.log(solution(""));
