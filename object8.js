weatherdata=[
    {district:'Thrissur',weather:28},
    {district:'Palakkad',weather:36},
    {district:'Kozhikod',weather:28},
    {district:'Thrissur',weather:29},
    {district:'Palakkad',weather:31},
    {district:'Kozhikod',weather:34},

] //array of objects.

  
//print district with its highest temp
// {t:29,p:36,k:34}
output={};
for(let data of weatherdata){
    let distname=data["district"];
    let currenttemp=data["weather"]
    if(distname in output){
        let oldtemp=output[distname];
        if(currenttemp>oldtemp){
            output[distname]=currenttemp;
        }
    }
    else{
        output[distname]=currenttemp;
    }
}
console.log(output);