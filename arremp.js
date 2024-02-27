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
for(let i of employee){
       console.log(i[1]);
     }

console.log("total number of employyes",employee.length);

for (let emp of employee){
    if (emp[2]=="Developer")
    console.log(emp);
}
        console.log("Employee salary greater than 30000");
        for(let em of employee){
            if(em[4]>=30000){
                console.log(em);
            }
        }
        
    console.log("details of laisha");
    for(let emm of employee)
    {
        if(emm[1]=="Laisha"){
            console.log(emm);
        }
    }
    console.log("salary in descending order");
    employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
    console.log(employee);
    employee.sort((emp1,emp2)=>emp1[4]-emp2[4])
    console.log(employee);
