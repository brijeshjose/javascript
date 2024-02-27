//Create an object representing a bank account with properties for balance
//and interest rate. Implement a program that uses assignment operators to
//simulate deposits and withdrawals, adjusting the balance accordingly.
let bank={
    balance:200000,
    interest:8
}
let withdrawals=100000;

for (let i in bank)
{
    console.log("current balance is",(bank[i]-withdrawals));
    break;
} 