/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function waitfirst(t1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t1*1000);
    })
}

function waitsecond(t2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t2*1000);
    })
}

function waitthird(t3) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t3*1000);
    })
}

function calculatePromiseAll() {
        startingTime = new Date().getTime();
       return Promise.all([waitfirst(t1),waitsecond(t2),waitthird(t3)]).then(() => {
        return new Date().getTime() - startingTime;
       })

}