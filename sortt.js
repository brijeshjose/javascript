var points=[40,100,1,5,25,10];
console.log("Numbers in ascending order",points.sort((a,b)=>a-b));
console.log("Numbers in descending order",points.sort((a,b)=>b-a));
points.sort((a,b)=>a-b)
let lowest=points[0];
let highest=points[5];
console.log(lowest);
console.log(highest);