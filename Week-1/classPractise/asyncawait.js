async function fetchData(){
    let somthng = await fetch('https://randomuser.me/api')
    somthng = await somthng.json();
    console.log(somthng);
}


fetchData();