var rainbow=["red","orange","yellow","green","blue","indigo","violot"]
function rainbows(rainbow,tofind)
{
    for(let i=0;i<rainbow.length;i++)
    {
        if(rainbow[i]===tofind)
            return i;
        }
            return null;
}console.log(rainbows(rainbow,"yellow"));
console.log(rainbows(rainbow,"violot"));
console.log(rainbows(rainbow,"white"));