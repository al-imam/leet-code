function addBinary(a: string, b: string): string {
  let binary = "";
  let carry = 0;
  const max = Math.max(a.length, b.length);

  for (let i = 0; i < max; i++) {
    const aValue = parseInt(a[a.length - 1 - i] ?? "0");
    const bValue = parseInt(b[b.length - 1 - i] ?? "0");
    const sum = aValue + bValue + carry;

    carry = sum > 1 ? 1 : 0;
    binary = (sum % 2).toString() + binary;
  }

  return carry ? carry.toString() + binary : binary;
}