pattern='ABCABBC';
out={};
for(let char of pattern){
    if(char in out){
        console.log("first recursive character",char);
        break;
    }
    else{
        out[char]=1;
    }}