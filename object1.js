var employee={
    id:1,
    name:"john",
    designation:"Developer",
    salary:35000,
    experience:4
}
console.log(employee);
console.log(employee["name"]);
console.log(employee.salary);
console.log("experience" in employee);//true
console.log("gender"in employee);//false

employee["gender"]='male';//adding new key
console.log(employee);

employee.isVaccinated=true;//adding next method
console.log(employee);

employee.vaccine='covieshield';//adding
console.log(employee);

employee.vaccine='covaxin';//update
console.log(employee);

employee.salary+=5000;//incrementing salary
console.log(employee);

for(let key in employee){
    console.log(`${key}:${employee[key]}`);
}
delete employee.experience
console.log(employee);