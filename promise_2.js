const promiseOne =new Promise(function(resolve, reject){  //intrduced in ES6
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();  //resolve the promise
    },1000)

       
})

promiseOne.
then(function(){
    console.log('Promise 1 resolved');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Promise 2 resolved');
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"});   //we can pass data in this 
                                 //resolve function, it can be of array, object type or function
    }, 1000);

});

promiseThree.then(function(user){
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
         if(!error) {
            resolve({username:"hitesh", password: "12345"})
         } else {
            reject('ERROR: Something went wrong')
         }
}, 1000)
})
const username= promiseFour
.then(user =>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);

})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:"javascript", password: "12345"})
            } else {
                reject('ERROR:JS went wrong')
                }
                }, 1000)
                
})