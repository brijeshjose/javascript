var expense=[12000,20000,34000,10000,28000,15000,50000];
sum=0;
for(let i of expense)
{
sum+=i;
}
console.log(`total is ${sum}`);

var maxexp=0;
for(let a of expense){
if(maxexp<a){
    maxexp=a;
}
}
console.log("Maximum"+maxexp);
    
minexp=expense[0];
for(let m of expense){
    if(m<minexp){
        minexp=m;
    }
}console.log("minimum expense"+minexp);