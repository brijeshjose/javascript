const count=true;
let countvalue=new Promise(function(resolve,reject){
    if(count){
        resolve("there isa count value")
    }else{
        reject("There is no count value")
    }
    
});
console.log(countvalue);