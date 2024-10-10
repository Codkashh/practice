//2.1
function fetchingTodos(){
    fetch('https://sum-server.100xdevs.com/todos').
    then(async response => {
        let output = await response.json();
        console.log(output);
    })
}

//2.2(using async await)

async function fetchingTodos(){
    const response = await fetch('https://sum-server.100xdevs.com/todos')
    const output = response.json();
    console.log(output);
}

//Callback

function fetchinData(callback) {
    setTimeout(() => {
        const data = "Hello, Callabck!"
        callback(data);
    },10000)
}

fetchinData( result => {
    console.log(result);
})

//promise--

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if(success){
                const data = "Hello Promise!";
                resolve(data);
            } else {
                reject("Oops! Something went wrong");
            }
        },1000);
    })
}


fetchData().
    then(result => {
        console.log(result);
    }).
    catch(error => {
        console.log(error);
    });

//Async - Await---

//example-1
async function fetchNewData() {
    let gettingFetch = await fetch('https://randomuser.me/api')
    gettingFetch = await gettingFetch.json();
    console.log(gettingFetch);
}

//example-2

async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = "Hello Async-Await!";
            resolve(data);
        }, 4000);
    });
}

async function fetchDataAndPrint() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

fetchDataAndPrint();

//Axios---

const axios = require("axios");

//1

axios.
    get(`https://randomuser.me/api`).
    then((response) => {
        console.log(response.data);
    }).
    catch((error) => {
        console.log("Error:", error);
    });

//2

async function getaxios() {
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data);
  }
  getaxios();
