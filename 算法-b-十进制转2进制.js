function binerity(a,b=''){
    if(a>=1){
        b=a%2+b
        return binerity(Math.floor(a/2),b)
    }else{
        return b
    }
}
console.log(binerity(1))