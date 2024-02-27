const school = {
    name: "XYZ School",
    location: "Townsville",
    classes: [
        {
            grade: 10,
            students: [
                {
                    name: "Alice",
                    age: 15,
                    grades: [85, 90, 78],
                },
                {
                    name: "Bob",
                    age: 16,
                    grades: [92, 88, 76],
                },
            ],
        },
        {
            grade: 11,
            students: [
                {
                    name: "Charlie",
                    age: 17,
                    grades: [78, 86, 95],
                },
                {
                    name: "David",
                    age: 16,
                    grades: [89, 94, 81],
                },
            ],
        },
    ],
};

console.log("1.........................................................");
console.log(school.name);
console.log("2.........................................................");
total=0
for(let i of school.classes){
    for(let j of i.students){
        if(i.grade==10){
            c=i.students.length
            total+=j.age
        }
    }
}let avg=total/c
console.log(+avg);
console.log("8.........................................................");
console.log(school.classes.some(n1=>n1.grade==9));