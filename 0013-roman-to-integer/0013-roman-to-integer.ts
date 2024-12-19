const romanToIntMap = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

function romanToInt(s: string): number {
  const romans = s.split("");
  let int = 0;

  for (let i = 0; i < romans.length; i++) {
    const current = romanToIntMap.get(romans[i])!;
    const next = romanToIntMap.get(romans[i + 1]);

    if (!current) throw Error("INVALID_STATE");

    if (!next) {
      int += current;
    } else if (current >= next) {
      int += current;
    } else {
      int += next - current;
      i++;
    }
  }

  return int;
}