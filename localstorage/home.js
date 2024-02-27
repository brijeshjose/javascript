username=localStorage.getItem("USERNAME")
console.log(username);
head1.innerHTML=`welcome  ${username}`  
function logout(){
    localStorage.clear()
    window.location='./login.html'
}