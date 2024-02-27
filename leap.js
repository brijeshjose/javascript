function leap( year) {
if((year%400==0)||(year%4==0)&&(year%100!=0)) 
{
    return 1;
}  else{
    return 0;
}
}
let n=2100;
console.log(`leap years from 2000 to ${n}`);
for(i=2000;i<=n;i++)
{
   if(leap(i))
   {
   console.log(`${i} is leap year` );
   }
   else{
    console.log(`${i} is not leap year` );
   }}