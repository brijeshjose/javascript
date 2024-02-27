
var arr=[2,3,4,5];
for(let i of arr)

{
    for(let j of arr)
    {
        if(i+j==9)
        {
            console.log(`The pairs are ${i} ${j}`);
        }
    }
}