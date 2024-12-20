function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let min = Infinity;

  for (let j = 0; j < min; j++) {
    const char = strs[0][j];
    if (
      !strs.every((s) => {
        if (s.length < min) {
          min = s.length;
        }

        return s[j] === char;
      })
    ) {
      return strs[0].slice(0, j);
    }
  }

  return strs[0].slice(0, min);
}