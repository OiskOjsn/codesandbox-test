console.clear();

const num = 1300;
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してね";
console.log(formattedNum);
