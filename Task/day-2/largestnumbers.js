let arr=[12,43,56,78,89];
 let arr1=arr.sort((a,b)=> b-a);
let top3=arr1.splice(0,4);
console.log(top3);