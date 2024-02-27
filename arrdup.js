//1 Print all the duplicate elements in an array
	//arr=[10,6,7,8,10,5,7,3,5]
var arr=[10,6,7,8,10,5,7,3,5];
var dupli=[];
for( a in arr)
{
    for( b in arr){
        if(a==b){
           continue;
        }
        else{
            if(arr[a]===arr[b]){
                dupli.push(arr[a]);
            }
        }
    }
}console.log(dupli);