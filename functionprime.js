//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function prime(num)
{
if(num==2)
{
    console.log("2 is Prime number");
}
else if(num==3)
{
    console.log("3 is prime number");
}
else{
    if((num%2==0)||(num%3==0)){
        console.log(`${num} is not prime`);
    }
    else{
        console.log(`${num} is  prime `);
    }
}
}
let a=prime(13);
console.log(a);