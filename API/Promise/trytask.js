const catalog = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", availability: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", availability: false },
    { title: "1984", author: "George Orwell", availability: true }
];
function check(book){
try{
   var c= catalog.find(a=>(a.title===book));
    if(c.title==book)
    {
        console.log('try block');
        console.log(c); 
    }else{
       throw Error 
    }
}
catch{
    console.log('catch block')
    console.log('book not found in catalog');
    }
finally{
    console.log('finally block');
    console.log('book catalog');
}
}
console.log("........................................................");
check("1984");
console.log("..............................................................");
check("198");