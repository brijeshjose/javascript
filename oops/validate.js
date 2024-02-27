db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false
function validate(acno){
    return acno in db?true:false;
}
console.log(validate(1007));
//2 create a function for authenticate user using account number and password
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied
function authenticate(acno,pswd){
    if(validate(acno)){
       actualpswd=db[acno].password;
        if (pswd==actualpswd){
            console.log("access granted");

        }else{
            console.log("permission denied");
        }
    }else{
        console.log("permisiion denied");
        
    }
} 
authenticate(1000,1000)
console.log(".............3 getBalance(acno) {}.........................................")
function getbalance(acno,pswd) {
    if(validate(acno)){
    actualpswd=db[acno].password;
     if (pswd==actualpswd){
         console.log("Blance is ",db[acno].balance);

     }else{
         console.log("canot check balance");
     }
 }else{
     console.log("canot check balance");
     }
}getbalance(1001,1001)

  console.log("......................4 fundTranser(fromacno,toacno,amount){}...............");

 function fundtransfer(fromacno,pswd,toacno,amount){
   var fromacnob=db[fromacno].balance-amount;
   var toacnob=db[toacno].balance+amount;
    if(validate(fromacno)){
        actualpswd=db[fromacno].password;
         if ((pswd==actualpswd)&&(amount<db[fromacno].balance)){
             console.log(`${amount} is  debited from accont No ${fromacno}.....Balance...RS...${fromacnob}`);
             console.log(`${amount} is  credited to account No ${toacno}....Balance...RS...${toacnob}`);
    
         }else{
             console.log("canot do transactions");
         }
     }else{
         console.log("canot do transactions");
         
     }}

  fundtransfer(1000,1000,1001,3000);