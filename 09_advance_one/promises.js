// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     }, 2000)
// })

// promiseOne.then(function(){
//     console.log('Promise Complete');
// })

// new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('Async 2');
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log('Async 2 pass');
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             username: 'Shivam Yadav', email: 'abc123@gmail.com', phone: '123456789'
//         })
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         const error = false;
//         if(!error){
//             resolve({
//                 username: 'Shivam Yadav', email: 'abc123@gmail.com', phone: '123456789'
//             })
//         } else {
//             reject('Error: something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// })
// .then(function(username){
//     console.log(username)})
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))


// this is another method in which we don't need then, catch methods
// const promiseFive = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             const error = true;
//             if(!error){
//                 resolve({
//                     username: 'Javascript', email: 'abc123@gmail.com', phone: '123456789'
//                 })
//             } else {
//                 reject('Error: Javascript went wrong')
//             }
//         },1000)
//     })
    
//     async function consumePromiseFive(){
//         try {
//             const response = await promiseFive
//             console.log(response)  
//         } catch (error) {
//             console.log(error);
//         }       
//     }
//     consumePromiseFive()

    // async function getAllUsers(){
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const data = await response.json()
    //         console.log(data);
    //     } catch (error) {
    //         console.log("E: ", error);
    //     }
    // }

    // getAllUsers()
//**********************************************************/
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) =>{
        return response.json()
    }).then((data) => {
        console.log(data);
    }).catch((error) => console.log(error))