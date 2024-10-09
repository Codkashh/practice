//example first

function greet(a,b){
    b(); // this is my caallback function
}

greet(1, function(){
    console.log("this is callback")
})

//Example second--->

function someAsyncWork(x, y, callback){
    setTimeout(function(){
        callback(x,y);
    },5000);
}

someAsyncWork(1,2, function(x,y) {
    console.log(x+y);
})


//Example third--->

function getUserdata(somthing, callback){
    fetch(something).then(raw => raw.json()).then(result => callback(result.results[0]));
}

getUserdata('https://randomuser.me/api', function(user){
    console.log(user.name.first, user.name.last);
    console.log(user.email);
    console.log(user.gender);
})