var employee=[
    [1000,'Neel','Developer','Kochi',25000,3], //emp
    [1001,'Max','Tester','TVM',20000,2],
    [1002,'Vinod','QA','KNR',35000,4],
    [1003,'Vyom','QA','Kochi',45000,5],
    [1004,'Laisha','Tester','TVM',55000,7],
    [1005,'Aahan','Developer','TVM',15000,1],
    [1006,'Aahil','QA','Kochi',25000,3],
    [1007,'Shayan','Developer','KNR',30000,3],
    [1000,'Nihaan','Developer','Kochi',25000,3],

];
employee.forEach(e=>console.log(e[1]));
console.log(employee.length);
console.log(employee.filter(em=>em[2]=='Developer'?em:""));
console.log(employee.filter(em=>em[4]>=30000?em:""));
console.log(employee.filter(em=>em[1]=='Laisha'?em:""));
console.log(employee.sort((emp1,emp2)=>emp2[4]-emp1[4]));
console.log(employee.sort((em1,em2)=>em1[5]-em2[5]));