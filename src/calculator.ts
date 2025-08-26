export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const delimiters = [",", "\n"];
  const regex = new RegExp(`[${delimiters.join("")}]`);

  const numArray = numbers.split(regex).map((num) => parseInt(num, 10));
  return numArray.reduce((acc, curr) => acc + curr, 0);
}
