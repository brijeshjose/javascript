//2 Find common elements in both arrays
	//arr1=[5,7,8,3,];
	//arr2=[7,8,2,1];
    var arr1=[5,7,8,3,];
	var arr2=[7,8,2,1];
    common=[]
    for(var i=0;i<arr1.length;++i) {
        for(var j=0;j<arr2.length;++j) {
          if(arr1[i]==arr2[j]) {       
            common.push(arr1[i]); 
          }
        }
    }console.log(common);