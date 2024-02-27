//[id , brand , model , type , pricePerDay, available]
let car = [
    [1, 'Toyota', 'Corolla', 'Sedan', 50, 10],
    [2, 'Honda', 'Civic', 'Sedan', 55, 8],
    [3, 'Ford', 'Mustang', 'Sports Car', 80, 5],
    [4, 'Jeep', 'Wrangler', 'SUV', 70, 7],
    [5, 'Nissan', 'Altima', 'Sedan', 45, 12]
]
console.log("1.....................................................");
car.forEach(c=>console.log(c[1]));
console.log("2.....................................................");
console.log(car.map(c=>c[5]).reduce((a,b)=>a+b));
console.log("3.....................................................");
console.log(car.filter(c=>c[3]=='Sedan'));
console.log("4.....................................................");
console.log(car.filter(c=>c[4]>50));
console.log("5.....................................................");
console.log(car.find(c=>c[2]=='Wrangler'));
console.log("6.....................................................");
console.log(car.sort((a,b)=>b[4]-a[4]));
console.log("7.....................................................");
console.log(car.sort((a,b)=>a[5]-b[5]));
console.log("8.....................................................");
a=car.sort((a,b)=>b[5]-a[5]);
console.log(a[0][1]);
console.log("9.....................................................");
console.log(car.map(c=>c[4]).reduce((a,b)=>a+b));
console.log("10.....................................................");
console.log(car.filter(c=>c[3]=='Sedan').map(a=>a[5]).reduce((a,b)=>a+b));
console.log("11.....................................................");
a=car.sort((a,b)=>b[5]-a[5]);
console.log(a[0]);
console.log("12.....................................................");
console.log(car.filter(c=>c[3]==='Sedan'));
console.log("13.....................................................");
console.log(car.map(c=>c[5]).reduce((a,b)=>a+b));
console.log("14.....................................................");
a=car.sort((a,b)=>a[5]-b[5]);
console.log(a[0][1]);
console.log("15.....................................................");
console.log(car.find(c=>c[4]==55));
console.log("16.....................................................");
 a=car.map(c=>c[4]).reduce((a,b)=>a+b);
console.log(a/car.length);
console.log("17.....................................................");
car.filter(c=>c[3]==='Sedan').forEach(c=>console.log(c[1]));
console.log("18.....................................................");
a=car.map(c=>c[5]).reduce((a,b)=>a+b);
console.log(a/car.length);
console.log("19.....................................................");
console.log(car.reduceRight((a,b)=>a[5]<4?a:"not found"));
console.log("20.....................................................");
console.log(car.find(c=>c[3]=='SUV'));