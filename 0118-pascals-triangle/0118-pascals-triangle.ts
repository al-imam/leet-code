function generate(numRows: number): number[][] {
  const res: number[][] = [];

  for (let index = 0; index < numRows; index++) {
    const row: number[] = [];

    for (let subIndex = 0; subIndex <= index; subIndex++) {
      if (subIndex === 0 || subIndex === index) {
        row.push(1);
      } else {
        const sum = res[index - 1][subIndex - 1] + res[index - 1][subIndex];
        row.push(sum);
      }
    }

    res.push(row);
  }

  return res;
}