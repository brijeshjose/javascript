function displaynum(num){
    result.value+=num
}

function clearbox()
{
    result.value=""
}

function evaluateExp()
{
   // exp=result.value;
   // output=eval(exp)
   // result.value=output
   result.value=eval(result.value)
}

function removelastitem()
{
result.value=result.value.slice(0,-1)
}