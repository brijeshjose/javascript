
let numbers=[12,18,20];
let max=numbers[0];
for(i=1;i<=3;i++)
{
   if(numbers[i]>max){
    max=numbers[i];
   }
}
console.log("The largest number is",max);