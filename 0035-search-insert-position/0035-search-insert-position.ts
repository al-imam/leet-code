function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const current = Math.floor((high + low) / 2);
    const currentValue = nums[current];

    if (currentValue === target) {
      return current;
    } else if (currentValue > target) {
      high = current - 1;
    } else {
      low = current + 1;
    }
  }

  return low;
}