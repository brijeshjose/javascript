let marks = [
    [1, 'John', 85],
    [2, 'Alice', 92],
    [3, 'Bob', 78],
    [4, 'Eva', 95],
    [5, 'Michael', 88]
]
console.log("1.....................................................");
marks.forEach(c=>console.log(c[1]));
console.log("2.....................................................");
console.log(marks.map(c=>c[2]).reduce((a,b)=>a+b));
console.log("3.....................................................");
console.log(marks.filter(c=>c[2]>90));
console.log("4.....................................................");
a=marks.sort((a,b)=>a[2]-b[2]);
console.log(a[0]);
console.log("5.....................................................");
a=marks.map(c=>c[2]).reduce((a,b)=>a+b);
console.log(a/marks.length);
console.log("6.....................................................");
a=marks.filter(c=>c[2]<80)
console.log(a.length);
console.log("7.....................................................");
console.log(marks.forEach(c=>console.log((c[1].toUpperCase()))));
console.log("8.....................................................");
console.log(marks.filter(c=>c[2]==92));
console.log("9.....................................................");
a=marks.sort((a,b)=>b[2]-a[2]);
console.log(a[0]);
console.log("10.....................................................");
marks.filter(m=>m[2]>85 &&m[2]<90).forEach(m=>console.log(m[1]));
console.log("11.....................................................");
a=marks.sort((a,b)=>b[2]-a[2]);
console.log(a[1]);
console.log("12.....................................................");
console.log(marks.reduceRight((a)=>a[2]<52? "failed":"all pass"));
console.log("13.....................................................");
console.log(marks.filter(c=>c[2]<85));
console.log("14.....................................................");
a=marks.sort((a,b)=>a[1].length-b[1].length);
console.log(a[0][1]);
console.log("15.....................................................");
console.log(marks.reduceRight((a)=>a[2]<60? a:"nobody"));
console.log("16.....................................................");
a=marks.sort((a,b)=>b[2]-a[2]);
console.log(a[0][1]);
console.log("17.....................................................");
console.log(marks.map(c=>c[2]).reduce((a,b)=>a+b));
console.log("18.....................................................");
marks.filter(c=>c[2]%2!==0).forEach(c=>console.log(c[1]));
console.log("19.....................................................");
a=marks.sort((a,b)=>b[1].length-a[1].length);
console.log(a[0][1]);
console.log("20.....................................................");
console.log(marks.reduceRight((a,b)=>a[2]===b[2]? a:"nobody"));