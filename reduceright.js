arr=[[1,"chinnu",100],[2,"minnu",200],[3,"ponnu",100],[4,"manu",100],[5,"anu",300]]
console.log(arr.reduce((n1,n2)=>n1[2]<n2[2]?n1:n2));
console.log(arr.reduceRight((n1,n2)=>n1[2]<n2[2]?n1:n2));