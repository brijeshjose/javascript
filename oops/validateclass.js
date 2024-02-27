class Bank{
db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false
validate(acno){
    return acno in this.db?true:false;
}

//2 create a function for authenticate user using account number and password
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied
 authenticate(acno,pswd){
    if(this.validate(acno)){
       
        if (pswd==this.db[acno].password){
            console.log("access granted");

        }else{
            console.log("permission denied");
        }
    }else{
        console.log("permisiion denied");
        
    }
}
//get balance
getbalance(acno){
    return this.validate(acno)?this.db[acno].balance:'Invalid account number'
}
//fund transfer
fundtransfer(froacc,toacc,amount){
    if(this.validate(froacc)&&this.validate(toacc)&&this.db[froacc].balance>amount){
        
        this.db[froacc]=-amount;
        this.db[toacc]=+amount;
        console.log("transaction sucessfull");
    }else{
        console.log("transaction failed");
    }
}
} 
b1=new Bank
b1.authenticate(1000,1000)
console.log(b1.validate(1007));
console.log(b1.getbalance(1001));
b1.fundtransfer(1000,1001,3000);
