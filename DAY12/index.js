//Normal function

// function addToCart() {
//   console.log("Item added to cart");
// }

// function calculateBill() {
//   console.log("Bill calculated");
// }

// addToCart();
// calculateBill();

// function with time interval

// function addToCart() {
//   setTimeout(() => {
//     console.log("Item added to cart");
//   }, 2000);
// }

// function calculateBill() {
//   setTimeout(() => {
//     console.log("Bill calculated");
//   }, 1000);
// }

// addToCart();
// calculateBill();

//Functions with Callbacks

// function addToCart(callback) {
//   setTimeout(() => {
//     console.log("Item added to cart");
//     callback()
//   }, 2000);
// }

// function calculateBill() {
//   setTimeout(() => {
//     console.log("Bill calculated");
//   }, 1000);
// }

// addToCart(calculateBill);

// Trick qn output: a d b c
// setTimeout(...) : JavaScript does NOT execute it immediately. :"Put this task in the callback queue and execute it later when the call stack becomes empty."
// function first(cb) {

//     console.log("A");

//     setTimeout(() => {
//         console.log("B");
//         cb();
//     }, 0);

// }

// function second() {
//     console.log("C");
// }

// first(second);

// console.log("D");

// More functions

// function addToCart(callback) {
//   setTimeout(() => {
//     console.log("Item added to cart");
//     callback();
//   }, 2000);
// }

// function calculateBill(callback) {
//   setTimeout(() => {
//     console.log("Bill calculated");
//     callback();
//   }, 1000);
// }

// function initiatePayment() {
//   setTimeout(() => {
//     console.log("Payment initiated");
//   }, 1000);
// }

// addToCart(() => {
//   calculateBill(() => {
//     initiatePayment();
//   });
// });

// let promise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("operation succesful");
//   } else {
//     reject("operation failed");
//   }
// });

// promise.then((data) => {
//   console.log(data);
// });

// tricky qn
// let p = new Promise((resolve, reject) => {
//   console.log("A");

//   resolve("B");
// });

// p.then((data) => {
//   console.log(data);
// });

// console.log("C");

//new Promise(...) :  the executor function runs immediately.
// But .then() callback is not executed immediately.
//It is placed in the Microtask Queue.
// JavaScript continues executing synchronous code.
// Call Stack becomes empty.

// 1. Execute ALL Microtasks first
// 2. Then execute Callback Queue tasks

// Call Stack
//    ↓
// Microtask Queue
//    ↓
// Callback Queue

//Synchronous Code
//      ↓
//Promise (.then)
//      ↓
//setTimeout

// Solve this tricky qn

// console.log("A");

// setTimeout(()=>{
//     console.log("B");
// },0);

// Promise.resolve().then(()=>{
//     console.log("C");
// });

// console.log("D");
// output : A D C B

async function addToCart(calculateBill) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let items = {
        laptop: 5000,
        mouse: 1000,
      };
      console.log("Items Added");
      resolve(items);
    }, 2000);
  });
}

async function calculateBill(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!items) {
        reject("No items Found");
        return;
      }
      let total = Object.values(items).reduce((sum, price) => sum + price);
      console.log("Bill Calculated");
      resolve(total);
    }, 1000);
  });
}

async function initiatePayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100000) {
        reject("Insufficient Balance");
        return;
      }
      console.log(`Payment Started for ₹${amount}`);
      resolve("Payment Success");
    }, 2000);
  });
}

//using promise
// addToCart()
//   .then(calculateBill)
//   .then(initiatePayment)
//   .then((message) => {
//     console.log(message);
//   }).catch((err)=>{
//     console.log("Error: ",err)
//   })

// Important Rule : A single .catch() can handle errors from all previous promises.
// Promise.resolve()
// .then(step1)
// .then(step2)
// .then(step3)
// .catch(errorHandler);

//using await and async

async function main() {
  let items = await addToCart();
  let bill = await calculateBill(items);
  let payment = await initiatePayment(bill);
  console.log(payment);
}

main();


async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  });

  let data = await response.json();

  for (let i = 0; i < 10; i++) {
    console.log(data[i]);
  }
}

fetchData();
