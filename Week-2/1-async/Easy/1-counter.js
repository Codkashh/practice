let count = 0;
function counter() {
    count += 1;
    console.log(count);

    if(count >= 10) {
        clearInterval(interval);
    }
}

const interval = setInterval(counter, 1000);

