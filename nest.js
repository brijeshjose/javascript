//[id,name,price,stock]
 products=[
    [1,'Hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,0],
    [6,'unibic',60,20],
    [7,'good day',70,20]]
console.log("1 .Display all products name");
products.filter(a=>console.log(a[1]));
console.log("2 .Display list of products under 50rs") 
products.filter(pos=>pos[2]<50).forEach(pos=>console.log(pos[1]));
console.log("3 .Print details of oreo product");
console.log(products.filter(c=>c[1]=='oreo'));
console.log("4 .Display most coslty product details");
console.log(products.reduceRight((a,b)=>a[2]>b[2]?a:b));
console.log("5 .Display out of stock product details");
console.log(products.filter(a=>a[3]==0));
console.log( "6 .Display print details of 4th product"); 
console.log(products.filter(c=>c[0]==4));
console.log("7 .sort products details based on product availability stock by desending")
console.log(products.sort((n1,n2)=>n2[3]-n1[3]));
console.log( "8 .Display products having maximum availabile stock");
console.log(products.reduceRight((a,b)=>a[3]>b[3]?a:b));
console.log("9 .Display products having minimum availabile stock");
console.log(products.reduceRight((a,b)=>a[3]<b[3]?a:b));
console.log("10 .Sort the products based on rate by ascending order");
console.log(products.sort((n1,n2)=>n1[2]-n2[2]));