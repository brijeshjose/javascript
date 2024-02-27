var vehicle=["car","bus","bus","bike","plane",200000,567000];
console.log(vehicle[0]);
var length=vehicle.length
console.log(length);
console.log(vehicle);
console.log(vehicle.push("auto"));//for inserting values
for(i=0;i<vehicle.length;i++)
{
    console.log(vehicle[i]);
}
for (let index in vehicle)
{
    console.log(index);
}
vehicle[0]="bmw";//changing value
console.log(vehicle);
for (let i of vehicle){
console.log(i);

}