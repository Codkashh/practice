function isPalindrome(str){
    str = str.replace(/[^a-zA-Z]/g,'').toLowerCase();
    for(let i=0; i<str.length/2; i++){
        if(str[i] != str[str.length-i-1]){
            return false;
        }
    }
    return true;
}