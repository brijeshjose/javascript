a=[1,2,3,4,5,6,7,8,9,10];
console.log(a.reduce((n1,n2)=>n1+n2));//sum
console.log(a.reduce((n1,n2)=>n1>n2?n1:n2));//highest
console.log(a.reduce((n1,n2)=>n1<n2?n1:n2));//lowest