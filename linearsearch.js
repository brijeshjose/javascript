function linearsearch(array,tofind){
    for(let i=0;i<array.length;i++)
    {
        if(array[i]===tofind)
            return i;
        }
            return -1;
}console.log(linearsearch(([12,18,15,16]),15));