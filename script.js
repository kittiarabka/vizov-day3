function isSymmetric(symbols) {
  const lastIndex = symbols.length - 1;

  for (let i = 0; i < symbols.length / 2; i++) {
    if (symbols[i] !== symbols[lastIndex - i]) {
      return false;
    }
  }

  return true;
}

const testCases = [
  [2, 5, 7, 5, 2],
  [4, 1, 3, 1, 4], 
  [2, 5, 7, 4, 2], 
  [9, 9, 9, 9], 
  [1, 2], 
  [6], 
];

for (const symbols of testCases) {
  console.log(isSymmetric(symbols));
}
