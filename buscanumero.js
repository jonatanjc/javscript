let nums=[2,1,3,4,6,8,5,4,3];
let i=0
let itemsearch=2;
let cont=1
 while(i<nums.length){
    if(nums[i]==itemsearch){
    cont=cont+1;
    }
    i=i+1

    
 }
 console.log("hay "+cont+ " numeros "+itemsearch);