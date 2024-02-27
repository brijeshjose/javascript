class Bank{
    constructor(acno,name,balance,pnno){
        this.accno=acno;
        this.name=name;
        this.balance=balance;
        this.phoneno=pnno;
    }
    printdetails(){
        console.log("account is created");
        console.log(this.accno,this.name,this.balance,this.phoneno);
    }
    deposit(amount){
        this.balance=this.balance+amount
        console.log(`credited to your account..................${amount}`);
    }
    withdraw(amount){
        if(amount>this.balance)
                          {
            console.log("transaction failed");}
        else{
            this.balance=this.balance-amount;
            console.log(`debited from your account.............${amount}`);
        }
    }
    balanceenq(){
        console.log(`your balance is..............${this.balance}`);
    }
}
n1=new Bank(100,"Amal",1000,9876543210);
n1.printdetails();
n1.deposit(100000);
n1.withdraw(50000);
n1.balanceenq();