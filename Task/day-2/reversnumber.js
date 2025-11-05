let num=12345678
let rem;
let count=0;
while(num){
    rem=num%10;
    count=count*10+rem
    num=Math.floor(num/10)
}
console.log(count);
