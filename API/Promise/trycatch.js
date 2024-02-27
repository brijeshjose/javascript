expr='23*76+97';
try{
    console.log('try block');
    console.log(eval(expr));
}catch{
    console.log('catch block');
    console.log('error');
}
console.log('data transmitted'+eval(expr));