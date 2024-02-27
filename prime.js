//Write a program that checks whether a given number is prime or not. If
//it's prime, print "Prime," otherwise, print "Not Prime.
var num=37;
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