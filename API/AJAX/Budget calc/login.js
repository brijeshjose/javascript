function register(){
    acno=reg_acno.value
    uname=reg_name.value
    pswd=reg_pswd.value
    console.log(acno,uname,pswd);
    accountdetails={
        acno,
        uname,
        pswd,
        
    }
    if(acno in localStorage){
        alert("user already registered")
    }
    else{
        localStorage.setItem(acno,JSON.stringify(accountdetails))
        alert("Registration successfull")
        window.location="./login.html";
    }
}




function login(){
    acno=login_acno.value
    pswd=login_pswd.value
    console.log(acno,pswd);
 
    if(acno in localStorage){
        accountdetails=JSON.parse(localStorage.getItem(acno));
        if(pswd==accountdetails.pswd){
            alert("login successful")
            window.location="./index.html";
        }else{
            alert("incurrect password")
        }
    }
    else{
        alert("invalid account number")
    }
}


