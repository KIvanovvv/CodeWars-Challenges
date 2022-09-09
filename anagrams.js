function anagrams(word, words) {
  let result = [];
  word = word.split("").sort((a, b) => a.localeCompare(b));
  let wordsCopy = words.slice();
  wordsCopy = wordsCopy.map((word) => word.split(""));
  let sortedWords = wordsCopy.map((word) =>
    word.sort((a, b) => a.localeCompare(b))
  );
  sortedWords.forEach(
    (el, i) => el.join("") === word.join("") && result.push(words[i])
  );
  return result;
}
console.log(
  anagrams("racer", ["crazer", "carere", "racarr", "caers", "racerw"])
);

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
