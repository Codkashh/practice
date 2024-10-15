/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */


function sleepMode(miliseconds) {
    return new Promise((resolve) => {
        const startingTime = new Date().getTime();
        while(new Date().getTime() - startingTime < miliseconds){
            //Do nothing
        }
        resolve();
    })
}