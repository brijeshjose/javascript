class Student{
    students(rollno,sname,mark,grade){
        this.srollno=rollno,
        this.ssname=sname,
        this.smark=mark,
        this.sgrade=grade
        console.log("student details created");
    } 
    printstudents(){
    console.log(this.srollno,this.ssname,this.smark,this.sgrade);
}}
stu=new Student();
stu.students(100,'markus',900,'A+');
stu.printstudents();