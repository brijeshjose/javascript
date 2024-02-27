let year=2008;
do
{
    if(year%4==0){
        console.log(`${year} is leap year`);
        break;

    }
    else{
        console.log(`${year} is not leap year`);
    }
}
while(year%4==0);