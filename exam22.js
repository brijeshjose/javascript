const groceryShop = [
    {
        id: 1,
        name: "Apples",
        category: "Fruits",
        price: 2.5,
    },
    {
        id: 2,
        name: "Tomatoes",
        category: "Vegetables",
        price: 1.8,
    },
    {
        id: 3,
        name: "Chicken Breast",
        category: "Meat",
        price: 5.0,
    },
    {
        id: 4,
        name: "Milk",
        category: "Dairy",
        price: 2.0,
    },
    {
        id: 5,
        name: "Bread",
        category: "Bakery",
        price: 2.2,
    },
];
console.log("1.....................................................");
groceryShop.forEach(c=>console.log(c.name));
console.log("2.....................................................");
console.log(groceryShop.filter(c=>c.price>3));
console.log("3.....................................................");
console.log(groceryShop.map(c=>c.name));
console.log("4.....................................................");
console.log(groceryShop.find(c=>c.id==2));
console.log("5.....................................................");
console.log(groceryShop.some(c=>c.category=='Dairy'));
console.log("6.....................................................");
console.log(groceryShop.filter(c=>c.price>2 && c.price<4));
console.log("7.....................................................");
console.log(groceryShop.map(c=>c.price).reduce((a,b)=>a+b));
console.log("8.....................................................");
console.log(groceryShop.flat());
console.log("9.....................................................");
console.log(groceryShop.map(c=>c.price).reduce((a,b)=>a+b)/groceryShop.length);
console.log("10.....................................................");
function add(...args){
    if(args==0){
        console.log("empty");
    }
    else if(args==1){
       
    groceryShop['id','name','category','price']=[6,'mango','fruits',30]
    console.log(groceryShop);
    }
    
    else{
        console.log("not possible");
    }

}
add(1);
add(0)