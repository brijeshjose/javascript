accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:6000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary', mode:'gpay'
            },
            {
                to:1001,amount:5000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebil', mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:7000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1000,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    }
]
console.log("1 total number of accounts");
a=accounts.map(c =>c.acno);
console.log(a.length);
console.log("2 print account number whose account type is savings");
accounts.filter(c=>c.ac_type=='savings').forEach(c=>console.log(c.acno));
console.log("3  print the balance of account number 1000");
accounts.filter(c=>c.acno=='1000').find(c=>console.log(c.balance));
console.log("4 print all gpay transactions");
console.log(accounts.map(c =>c.transaction).flat().filter(t=>t.mode=="gpay"));
console.log("5 print all transactions whose amount > 5000");
console.log(accounts.map(c =>c.transaction).flat().filter(t=>t.amount>5000));
console.log("6. print all credit transactions of account 1002");
console.log(accounts.map(c =>c.transaction).flat().filter(t=>t.to=='1002'));
console.log("7 print all debit transactions of account 1002");
accounts.filter(c=>c.acno=='1002').find(c=>console.log(c.transaction));
console.log("8 print the highest balance account details")
a=accounts.sort((a,b)=>b.balance-a.balance)
console.log(a[0]);
console.log("9.print transaction history of 1002");
accounts.filter(c=>c.acno=='1002').find(c=>console.log(c.transaction));
console.log("10. print transaction history of account 1003")
accounts.filter(c=>c.acno=='1003').find(c=>console.log(c.transaction));