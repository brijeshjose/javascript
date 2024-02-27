num=123;
str="";

while(num!=0)
{
lastDigit=num%10;
str+=lastDigit;
num=Math.floor(num/10);
}
console.log(str);