function stringMultiplicar(n) {
    var cadena=""
    for(i=1;i<=10;i++){
        cadena+=n+"x"+i+"="+n*i;
        if((i+1)<=10)
        {
            cadena+="/";   
        }
    }
     return cadena;

}
