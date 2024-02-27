//Write a recursive function in JavaScript to calculate the nth Fibonacci number. The Fibonacci sequence is defined as follows: 
//the first two numbers are 0 and 1, and each subsequent number is the sum of the two preceding ones
function fibo(n)
{
    if(n==1)
    {
        return 0;
    }
    else if(n==2)
    {
        return 1;
    }
    else 
    {
        return fibo(n-1)+fibo(n-2);
    }
   
}
console.log(fibo(9));