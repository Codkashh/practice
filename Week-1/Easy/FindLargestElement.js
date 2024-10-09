
function findlargestElement(number){
    let newNum = 0;
    for(let i=0; i<number.length; i++){
        if(number[i]>newNum){
            newNum = number[i];
        }
    }
    return newNum;
}