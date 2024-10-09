function countVowel(str){
    let vowel = ['a','e','i','o',u];
    let count = 0;

    str.toLowerCase().split('').array.forEach(element => {
        if(vowel.includes(element)){
            count++;
        }
    });
    return count;
}