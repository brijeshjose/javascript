let a=5;
let b=6;
let c=7;
if((a>b)&&(a>c))
{
    console.log(`The largest number is ${a}`);
    if(b>c)
    {
        console.log(`The 2ndlargest number is ${c}`);
        console.log(`The 3rdlargest number is ${a}`);
}
else
{
    console.log(`The 2ndlargest number is ${b}`);
    console.log(`The 3rdlargest number is ${c}`);
} 
}

    

else if((b>a)&&(b>c))
{
    console.log(`The largest number is ${b}`);
    if(a>c){
        console.log(`The 2ndlargest number is ${a}`);
        console.log(`The 3rdlargest number is ${c}`);

    }
    else{
        console.log(`The 2ndlargest number is ${c}`);
        console.log(`The 3rdlargest number is ${a}`);
    }
}
else if ((c>a)&&(c>b)) {
    console.log(`The largest number is ${c}`);
    if(a>b)
    {
        console.log(`The 2ndlargest number is ${a}`);
        console.log(`The 3rdlargest number is ${b}`); 
    }
    else
    {
        console.log(`The 2ndlargest number is ${b}`);
        console.log(`The 3rdlargest number is ${a}`);
    }
}
