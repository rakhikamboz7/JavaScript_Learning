async function getData() { //function should be async whenever going t run an async task(whcih takes time to run or block ther tasks to run)..

    let resultFromServer = await fetch(
        "https://jsonplaceholder.typicode.com/posts"  //await can only be used when using async  function

    );   
    console.log(await resultFromServer.json());
}
getData();


// withut using async and await : we can use callback functions(.then, .catch, .finally)
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((data) =>{
//     console.log(data.json());
// })
// .catch((error) =>{
//     console.log(error);
//     })

let a= 4;
let b = 5;

let sum =a+b;
console.log(sum);
