let rows = 4;
let str = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 0; j < rows - i; j++) {
    str += " ";
  }
  for (let k = 0; k < i; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);