//Write a program to check a number armstrong or not
let sum=0,a,num;
num=153;
temp=num;
while(temp>0)
{
a=temp%10;
temp=parseInt(temp/10); 
sum=sum+a*a*a;
}
if(sum==num)
{
console.log("Armstrong number");
}
else
{
console.log("Not Armstrong number");
}