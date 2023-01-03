async function ammar(){
    let promise1 = new Promise((resolve, reject)=>{
        console.log("pending")
        setTimeout(()=>{
            console.log("fulfilled")
            resolve(true)
        }, 5000)
    
    })
    
    let promise2 = new Promise((resolve, reject)=>{
        console.log("pending")
        setTimeout(()=>{
            console.log("yes i am 2 fulfilled")
            // reject(new Error("i am error"))
            resolve(true)
        }, 7000)
    
    })

    console.log("fetching promise 1 please wait")
    let ful = await promise1
    console.log("fetched promise 1 complete"+ ful)

    console.log("fetching promise 2 please wait")
    let err = await promise2
    console.log("fetched promise 2 complete"+ err)

    return[ful, err]
}

const ammar2 = async () => {
    console.log("I am Ammar2")
}

const main1 = async () => {
console.log("Welcome to control room")
let a = await ammar()
let b = await ammar2()

}
main1()


// let promise1 = new Promise((resolve, reject)=>{
//     console.log("pending")
//     setTimeout(()=>{
//         console.log("fulfilled")
//         resolve(true)
//     }, 5000)

// })

// let promise2 = new Promise((resolve, reject)=>{
//     console.log("pending")
//     setTimeout(()=>{
//         console.log("rejected not fulfilled")
//         reject(new Error("i am error"))
//     }, 5000)

// })

// -----------USED CONSUMERS -> then & catch-------------
// with the help of consumer we can find the value and error of promises

// ------------------------FULFILLED-----------------------
// promise1.then((value)=>{
//     console.log(value)
// })

// ------------------------REJECTED------------------------
// promise2.catch((error)=>{
//     console.log("ERROR IS OCCURED IN P2")
// })


// ----------------------MOST FUNDAMENTAL Of then----------
// promise1.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })


// console.log(promise1,promise2)