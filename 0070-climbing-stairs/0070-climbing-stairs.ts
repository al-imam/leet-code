const cache = new Map<number, number>();

function climbStairs(n: number): number {
  if (n < 0) return 0;
  if (n === 0) return 1;

  if (cache.has(n)) {
    return cache.get(n)!;
  }

  const compute = climbStairs(n - 1) + climbStairs(n - 2);

  cache.set(n, compute);

  return compute;
}