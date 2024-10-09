function calculateTime(num){
    let sum = 0;
    for(let i = 0; i<=num; i++){
        sum += i;
    }
    return sum;
}


let beforeDate = new Date();
let beforeTimeinmsec = beforetime.getTime();
console.log(100000);
let afterDate = new Date();
let afterTimeinsec = afterDate.getTime();

console.log(afterTimeinsec-beforeTimeinmsec);