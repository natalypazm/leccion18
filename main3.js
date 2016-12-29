function factorial(n) {
    var fac=1
    if(n<=0){
        return null;
    }
    else{
        for(i=1;i<=n;i++){
            fac*=i;
        }
    return fac;
    }
}