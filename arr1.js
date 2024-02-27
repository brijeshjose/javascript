var arr=[23,24,25,26,29];
var element=29;
flag=0;
for (let i of arr){
    if(i==element){
        flag=1;
        break
    }
}
console.log(flag==1?"number is found":"number is not found");