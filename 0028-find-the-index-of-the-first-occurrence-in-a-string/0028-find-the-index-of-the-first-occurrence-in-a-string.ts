function strStr(haystack: string, needle: string): number {
  /* JS default solution \U0001f602
   * return haystack.indexOf(needle, 0);
   */

  // Different approach
  const parts = haystack.split(needle);
  if (parts.length === 1) return -1;
  return parts[0].length;
}