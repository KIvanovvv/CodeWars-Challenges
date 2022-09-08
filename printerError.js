function printerError(s) {
  let errorCounter = 0;
  let res;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      errorCounter++;
    }
  }
  return (res = `${errorCounter}/${s.length}`);
}
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
