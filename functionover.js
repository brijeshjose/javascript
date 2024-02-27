//js doesnot support function overloading
function add(a,b){
    console.log("sum of two numbers");
    return a+b;
}
add(20,10);                                    //sum of three numbers
                                                //sum of three numbers
function add(a,b,c){
    console.log("sum of three numbers");
    return a+b+c;
}
add(20,10,30);
