n=639;
str="";
while(n!=0)
{
    lastDigit=n%10;
    str+=lastDigit;
    n=Math.floor(n/10);
}
console.log(str);