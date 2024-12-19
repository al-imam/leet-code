function twoSum(nums: number[], target: number): number[] {
  const numbersMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (numbersMap.has(diff)) {
      return [numbersMap.get(diff)!, i];
    }

    numbersMap.set(nums[i], i);
  }

  throw Error("No solution");
}