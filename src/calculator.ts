export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiters = [",", "\n"];
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiterSection = numbers.slice(2, delimiterEndIndex);

    if (delimiterSection.startsWith("[") && delimiterSection.endsWith("]")) {
      delimiters = delimiters.concat(
        delimiterSection
          .slice(1, -1)
          .split("][")
          .map((d) => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")),
      );
    } else {
      delimiters.push(delimiterSection);
    }
    numbers = numbers.slice(delimiterEndIndex + 1);
  }

  const regex = new RegExp(`[${delimiters.join("")}]`);
  const numArray = numbers.split(regex).map(Number);

  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`,
    );
  }
  return numArray
    .filter((num) => num <= 1000)
    .reduce((sum, num) => sum + num, 0);
}
