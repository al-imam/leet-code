function removeElement(nums: number[], val: number): number {
  let k = 0;

  nums.forEach((n, index) => {
    if (n === val) {
      nums[index] = Infinity;
    } else {
      k++;
    }
  });

  nums.sort((a, b) => a - b);

  return k;
}