//create an object for car whose properties are {name, model, manufacturer,price}


//1 Display manufacturer information for the car
//2 Check whether the model is present or not
//3 Add property varient
//4 Add property colour
var car={
    name:'ecosport',
    model:2011,
    manufacturer:'ford',
    price:300000
}
console.log(car.manufacturer);
console.log("model" in car);
car['varient']=['manual']
car['varient'].push('automatic')
console.log(car);
car['colour']=['white','black','red','green','yellow'];
console.log(car);
