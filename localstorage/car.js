function store(){
    car={
        brand:carbrand.value,
        rs:price.value,
        key:key.value
    }
    if(car.brand=="" || car.rs==""||car.key==""){
        alert("please fill the input field")
    }
    else{
if(car.key in localStorage){
alert("already exist")
}else{
localStorage.setItem(car.key,JSON.stringify(car))
alert("Record stored succesfully")
}}
}
  
function retrieve()
{
    let key=retkey.value
    let car=JSON.parse(localStorage.getItem(key))
    result.innerHTML=`<div class="card" style="width: 18rem;">
   
    <div class="card-body">
      <h5 class="card-title">Car Details</h5>
     
    <ul class="list-group list-group-flush">
      <li class="list-group-item">car Brand:${car.brand}</li>
      <li class="list-group-item">Price:${car.rs}</li>
      <li class="list-group-item">Key:${car.key}</li>
    </ul>
    <div class="card-body">
      
    </div>
  </div>` 
}

function remove(){
    let key=delkey.value
    let car=JSON.parse(localStorage.removeItem(key))
    }

function deleteall(){
localStorage.clear()
}