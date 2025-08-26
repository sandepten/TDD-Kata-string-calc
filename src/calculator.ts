export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const delimiters = [",", "\n"];
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEndIndex);
    delimiters.push(customDelimiter);
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  const regex = new RegExp(`[${delimiters.join("")}]`);
  const numArray = numbers.split(regex).map((num) => parseInt(num, 10));
  return numArray.reduce((acc, curr) => acc + curr, 0);
}
