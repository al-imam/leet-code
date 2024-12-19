function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  const min = Math.min(...strs.map((s) => s.length));

  for (let j = 0; j < min; j++) {
    if (!strs.every((s) => s[j] === strs[0][j])) {
      return strs[0].slice(0, j);
    }
  }

  return strs[0].slice(0, min);
}