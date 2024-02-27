class Empolyee{
    setEmployee(id,name,designation,salary){
        this.empid=id,
        this.empname=name,
        this.empdesignation=designation,
        this.empsalary=salary
        console.log("employee details created");
    }
    printEmployee(){
        console.log(this.empid,this.empname,this.empdesignation,this.empsalary);
    }
}
emp=new Empolyee();
emp.setEmployee(1000,'manoj','developer',30000);
emp.printEmployee();
emp1=new Empolyee();
emp1.setEmployee(1001,'santhosh','tester',20000);
emp1.printEmployee();
