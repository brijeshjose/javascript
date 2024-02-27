let n = 4; 
let string = "";
for (let row = 1; row <= n; row++) 
{
  for (let col = 1; col <= row; col++) 
  {
    string += row;
  }
  string += "\n";
}
console.log(string);