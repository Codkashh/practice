/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

function promiseChain(t1,t2,t3) {
    const startingTime = new Date().getTime();
    return waitfirst(t1).then(() => {
        return waitsecond(t2);
    }).then(() => {
        return waitthird(t3);
    }).then(() => {
        return new Date().getTime() - startingTime;
    })
}