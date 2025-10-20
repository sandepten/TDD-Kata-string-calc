const input_list = ["bella", "label", "roller"];

const ans = [];

for (let i = 0; i < input_list[0].length; i++) {
  const currChar = input_list[0].split("")[i];

  let isPresentInAll = true;
  for (let j = 1; j < input_list.length; j++) {
    if (!input_list[j].includes(currChar)) {
      isPresentInAll = false;
    }
  }
  if (isPresentInAll) {
    if (!ans.toString().includes(currChar)) {
      ans.push(currChar);
    }
  }
}

console.log(ans);
