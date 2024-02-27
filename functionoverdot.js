function processarguments(...args){//using ...spread operator overloading is possible
    if(args.length===0){
        console.log('no argument');

    }
    else if(args.length===1){
        console.log('one argument',args[0]);

    }else{
        console.log('multiple argument',args);
    }
}
processarguments();
processarguments(10);
processarguments('apple','orange','mango')