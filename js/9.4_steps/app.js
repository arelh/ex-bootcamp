const replaceNumberWithSpace = (number) => {
  let spaces = "";
  for (let i = 1; i <= number; i++) {
    spaces += " ";
  }
  return spaces;
};

const replaceNumberWithChar = (number) => {
  let chars = "";
  for (let i = 1; i <= number; i++) {
    chars += "#";
  }
  return chars;
};

function steps(N) {
  // ex: N=2
  for (let i = 1; i <= N; i++) {
    let spaces = "";
    if (N > 1) {
      spaces = replaceNumberWithSpace(`${N - i}`);
    }
    const chars = replaceNumberWithChar(`${i}`);
    console.log(`${chars}${spaces}`);
  }
}

steps(10);
