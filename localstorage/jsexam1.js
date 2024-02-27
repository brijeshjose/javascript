const cars = [ { brand: "Toyota", model: "Camry", year: 2022, type: "Sedan", fuelType: "Gasoline", owner: "John Doe", }, { brand: "Honda", model: "Civic", year: 2021, type: "Sedan", fuelType: "Gasoline", owner: "Jane Smith", }, { brand: "Ford", model: "F-150", year: 2020, type: "Truck", fuelType: "Diesel", owner: "Bob Johnson", }, { brand: "Tesla", model: "Model 3", year: 2023, type: "Electric", owner: "Alice Williams", }, { brand: "Chevrolet", model: "Equinox", year: 2022, type: "SUV", fuelType: "Gasoline", owner: "Charlie Brown", }, ];
console.log("Question 1: Print the names of all car brands in the array.");
  cars.filter(c=>c.brand).forEach(p=>console.log(p.brand))
console.log("Question 2: Print the total number of cars in the array.");
console.log(cars.length);
console.log("Question 3: Print the cars details that are owned by Charlie Brown person.");  
console.log(cars.find(p=>p.owner=="Charlie Brown"));
console.log("Question 4: Print the names of the cars manufactured after the year 2020");
cars.filter(c=>c.year>2020).forEach(p=>console.log(p.brand));
console.log("Question 5: Print the cars that are electric.");  
 console.log(cars.find(c=>c.type=='Electric'));