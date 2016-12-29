function casiPalindrome(palabra) {
    var len=palabra.length
    var palindrome
    var count = 0
    for(var a=0,b=len-1;a<len/2,b>len/2;a++,b--){
        if(palabra[a]!=palabra[b]){
           count+=1;
        } 
       }
        if(count<=2){
            palindrome=true;
        }
        else{
            palindrome=false;
        }
        
    return palindrome;
}

