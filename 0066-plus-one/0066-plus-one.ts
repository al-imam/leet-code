function plusOne(digits: number[]): number[] {
  const digitCombined = digits.join("");
  const int = BigInt(digitCombined) + BigInt(1);

  return int.toString().split("").map(Number);
}