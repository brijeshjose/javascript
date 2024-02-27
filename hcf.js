//Write a program to find GCD/HCF of 2 numbers HCF (highest common factor)
let hcf;
const number1 = 12;
const number2 = 36;
for (let i = 1; i <= number1 && i <= number2; i++) 
{
    if( number1 % i == 0 && number2 % i == 0) 
    {
        hcf = i;
    }
}
console.log('HCF of ',(number1),(number2), '=' ,(hcf));