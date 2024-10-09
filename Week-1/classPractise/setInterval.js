console.log("before setOutTime...")
let count = 1;
let interval = setInterval(() => {
    console.log("Helloji , am inside settimeout function");
    count++;
    if(count>10){
        clearInterval(interval);
    }
},2000);

console.log("After setTimeout...");