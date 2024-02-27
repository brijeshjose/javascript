let n = 6;
let string = "";
for (let row= 1; row <= n; row++) {
  for (let col = 0; col < row; col++) {
    if(row === n) {
      string += "*";
    }
    else {
      if (col == 0 || col == row - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);