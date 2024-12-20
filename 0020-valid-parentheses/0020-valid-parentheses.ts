const parenthesesMap = new Map([
  [")", "("],
  ["}", "{"],
  ["]", "["],
]);

const closingParentheses = Array.from(parenthesesMap.keys());

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (closingParentheses.includes(char)) {
      const topElement = stack.length === 0 ? "@" : stack.pop();
      if (topElement !== parenthesesMap.get(char)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}