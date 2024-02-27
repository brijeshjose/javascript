//[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]

covin=[
    [1,'Eranakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Kottayam',27000,1500,27000,14000,1000],
    [7,'Kollam',14000,2500,25000,18000,2700]
]

console.log("1. Find which district having highest +ve case?");
var a=covin.sort((n1,n2)=>n2[2]-n1[2]);
console.log(a[0][1]);
console.log("2. Find which district having highest 1st dose vaccine?");
var b=covin.sort((n1,n2)=>n2[5]-n1[5]);
console.log(b[0][1]);
console.log("3. Find which district having lowest death rate?");
var c=covin.sort((n1,n2)=>n1[3]-n2[3]);
console.log(c[0][1]);
console.log("4. Sort the data with +ve case in desending order");
console.log(covin.sort((n1,n2)=>n2[2]-n1[2]));
console.log("5. sort district with 1st dose vaccine");
covin.sort((n1,n2)=>n2[5]-n1[5]).map(n1=>console.log(n1[1]));
console.log("6. print total number of curred cases");
console.log(covin.map(cu=>cu[4]).reduce((a,b)=>a+b));
console.log("7. print total curred cases in Idukki");
covin.filter(cu=>cu[1]=='Idukki').forEach(cu=>console.log(cu[4]));
console.log("8. Is any district having more than 27000 +ve cases"); 
covin.filter(pos=>pos[2]>27000).forEach(pos=>console.log(pos[1]));