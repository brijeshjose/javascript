class  Student{
    constructor(rollno,name,grade,total){
        this.rollno=rollno;
        this.Studentname=name;
        this.grade=grade;
        this.totalmark=total;
    }
    printdetails(){
        console.log(this.rollno,this.Studentname,this.grade,this.totalmark);
    }
}
s1=new Student(1,'Amar',8,450)
s1.printdetails();
s2=new Student(2,'Bimal',8,420)
s2.printdetails();