a=[10,10,20,20,30,30,40,40,50,50,50,60]
num={}
a.map(nums=>nums in num?num[nums]+=1:num[nums]=1);
console.log(num);