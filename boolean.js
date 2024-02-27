//Write a program that takes two boolean values as input and returns the
//result of various logical operations, such as AND, OR, and NOT, between
//them
const a=true;
const b=false;
console.log("LOGICAL AND");
console.log(`${a}&&${b}=`,(a&&b));
console.log(`${b}&&${a}=`,(b&&a));
console.log(`${a}&&${a}=`,(a&&a));
console.log("LOGICAL OR");
console.log(`${a}||${b}=`,(a||b));
console.log(`${b}||${a}=`,(b||a));
console.log(`${a}||${a}=`,(a||a));
console.log("LOGICAL NOT");
console.log(`${a}=`,!a);
console.log(`${b}=`,!b);