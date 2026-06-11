# 🚀 JavaScript Asynchronous Programming Mastery Roadmap

> Complete Beginner to Advanced Interview Preparation Guide

---

# 📚 Table of Contents

1. Synchronous JavaScript
2. Asynchronous JavaScript
3. Callbacks
4. Callback Hell (Pyramid of Doom)
5. Promises
6. Promise States
7. resolve() and reject()
8. then(), catch(), finally()
9. Promise Chaining
10. Promise.all()
11. Promise.allSettled()
12. Promise.race()
13. Promise.any()
14. Async Functions
15. Await Keyword
16. Async/Await Error Handling
17. Event Loop
18. Call Stack
19. Web APIs
20. Callback Queue (Macrotask Queue)
21. Microtask Queue
22. Execution Order
23. Fetch API
24. HTTP Methods
25. JSON and response.json()
26. API Error Handling
27. Real-World E-Commerce Workflow
28. Interview Preparation

---

# 1️⃣ Synchronous JavaScript

## Definition

Synchronous JavaScript executes one statement at a time in sequential order.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

### Output

```text
A
B
C
```

---

## Why It Exists

JavaScript originally executed code line by line.

This model is:

- Simple
- Predictable
- Easy to debug

---

## Real-Life Analogy

```text
Take Token
↓
Order Food
↓
Pay Bill
↓
Collect Food
```

Each step must finish before the next begins.

---

## Advantages

✅ Easy to understand

✅ Predictable execution

✅ Simple debugging

---

## Disadvantages

❌ Blocking

❌ Poor user experience

❌ Cannot efficiently handle long-running operations

---

## Internal Execution

```text
Call Stack

Top
│
console.log("C")
│
console.log("B")
│
console.log("A")
Bottom
```

---

# 2️⃣ Asynchronous JavaScript

## Definition

Asynchronous programming allows JavaScript to continue execution while waiting for long-running operations.

Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Finished");
}, 2000);

console.log("End");
```

### Output

```text
Start
End
Finished
```

---

## Why Asynchronous Programming Exists

Without asynchronous execution:

- UI freezes
- Slow APIs block execution
- Poor user experience

---

## Real-Life Analogy

```text
Order Pizza
↓
Watch TV
↓
Pizza Arrives
```

Instead of waiting near the oven.

---

# 3️⃣ Callbacks

## Definition

A callback is a function passed as an argument to another function.

```javascript
function greet(callback) {
  console.log("Hello");
  callback();
}

function bye() {
  console.log("Bye");
}

greet(bye);
```

Output:

```text
Hello
Bye
```

---

## Callback Flow

```text
greet(bye)
      │
      ▼
console.log("Hello")
      │
      ▼
callback()
      │
      ▼
bye()
```

---

# 4️⃣ Callback Hell

## Problem

```javascript
addToCart(() => {
  calculateBill(() => {
    initiatePayment(() => {
      paymentStatus(() => {
        updateInventory(() => {
          console.log("Done");
        });
      });
    });
  });
});
```

---

## Why It's Bad

- Deep nesting
- Hard debugging
- Difficult maintenance

---

# 5️⃣ Promises

## Definition

A Promise represents a value that may be available now, later, or never.

```javascript
let promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

---

## Promise States

```text
Pending
   │
   ├── Fulfilled
   │
   └── Rejected
```

---

## Example

```javascript
promise.then((data) => {
  console.log(data);
});
```

---

# 6️⃣ Promise States

| State     | Meaning              |
| --------- | -------------------- |
| Pending   | Initial State        |
| Fulfilled | Operation Successful |
| Rejected  | Operation Failed     |

---

# 7️⃣ resolve() and reject()

## resolve()

```javascript
resolve("Success");
```

Moves Promise to Fulfilled state.

---

## reject()

```javascript
reject("Failed");
```

Moves Promise to Rejected state.

---

# 8️⃣ then(), catch(), finally()

## then()

```javascript
promise.then((result) => {
  console.log(result);
});
```

---

## catch()

```javascript
promise.catch((error) => {
  console.log(error);
});
```

---

## finally()

```javascript
promise.finally(() => {
  console.log("Cleanup");
});
```

Runs regardless of success or failure.

---

# 9️⃣ Promise Chaining

```javascript
addToCart()
  .then(calculateBill)
  .then(initiatePayment)
  .then(paymentStatus)
  .catch(console.error);
```

---

## Data Flow

```text
items
 ↓
bill
 ↓
payment
 ↓
status
```

---

# 🔟 Promise.all()

Runs multiple promises in parallel.

```javascript
Promise.all([fetchUsers(), fetchProducts(), fetchOrders()]);
```

---

## Behavior

```text
All succeed
     ↓
Resolve

One fails
     ↓
Reject
```

---

# 1️⃣1️⃣ Promise.allSettled()

Returns results of all promises.

```javascript
Promise.allSettled([p1, p2, p3]);
```

---

# 1️⃣2️⃣ Promise.race()

Returns the first settled promise.

```javascript
Promise.race([p1, p2]);
```

---

# 1️⃣3️⃣ Promise.any()

Returns first successful promise.

```javascript
Promise.any([p1, p2, p3]);
```

---

# 1️⃣4️⃣ Async Functions

```javascript
async function hello() {
  return "Hello";
}
```

Equivalent to:

```javascript
Promise.resolve("Hello");
```

---

# 1️⃣5️⃣ Await Keyword

```javascript
let data = await fetchData();
```

Waits for Promise resolution.

---

# 1️⃣6️⃣ Async/Await Error Handling

```javascript
try {
  let data = await fetchData();
} catch (error) {
  console.log(error);
}
```

---

# 1️⃣7️⃣ Event Loop

## Purpose

Coordinates:

- Call Stack
- Web APIs
- Queues

---

## Architecture

```text
Call Stack
     │
     ▼
Web APIs
     │
     ▼
Microtask Queue
     │
     ▼
Callback Queue
     │
     ▼
Event Loop
```

---

# 1️⃣8️⃣ Call Stack

```javascript
function A() {
  B();
}

function B() {
  C();
}

function C() {
  console.log("Hello");
}
```

Stack:

```text
C
B
A
```

---

# 1️⃣9️⃣ Web APIs

Examples:

- setTimeout
- DOM Events
- fetch
- Geolocation

---

# 2️⃣0️⃣ Callback Queue

Stores:

```javascript
setTimeout(...)
```

callbacks.

---

# 2️⃣1️⃣ Microtask Queue

Stores:

```javascript
Promise.then()
catch()
finally()
await
```

callbacks.

---

# 2️⃣2️⃣ Execution Order

Priority:

```text
Synchronous Code
      ↓
Microtasks
      ↓
Macrotasks
```

---

# 2️⃣3️⃣ Fetch API

```javascript
let response = await fetch(url);
```

Returns:

```text
Promise<Response>
```

---

# 2️⃣4️⃣ HTTP Methods

| Method | Purpose |
| ------ | ------- |
| GET    | Read    |
| POST   | Create  |
| PUT    | Replace |
| PATCH  | Update  |
| DELETE | Remove  |

---

# 2️⃣5️⃣ JSON and response.json()

```javascript
let data = await response.json();
```

Converts JSON into JavaScript objects.

---

# 2️⃣6️⃣ API Error Handling

```javascript
if (!response.ok) {
  throw new Error("Request Failed");
}
```

---

# 2️⃣7️⃣ Real E-Commerce Workflow

## Using Callbacks

```javascript
addToCart(() => {
  calculateBill(() => {
    applyCoupon(() => {
      initiatePayment(() => {
        verifyPayment(() => {
          updateInventory(() => {
            generateInvoice(() => {
              sendEmail();
            });
          });
        });
      });
    });
  });
});
```

---

## Using Promises

```javascript
addToCart()
  .then(calculateBill)
  .then(applyCoupon)
  .then(initiatePayment)
  .then(verifyPayment)
  .then(updateInventory)
  .then(generateInvoice)
  .then(sendEmail)
  .catch(console.error);
```

---

## Using Async/Await

```javascript
try {
  let items = await addToCart();
  let bill = await calculateBill(items);
  let discounted = await applyCoupon(bill);
  let payment = await initiatePayment(discounted);
  await verifyPayment(payment);
  await updateInventory();
  await generateInvoice();
  await sendEmail();
} catch (error) {
  console.error(error);
}
```

---

# 2️⃣8️⃣ Interview Preparation

## Frequently Asked Questions

### What is Callback Hell?

Deeply nested callbacks causing unreadable code.

---

### Difference between Promise and Async/Await?

| Promise     | Async/Await       |
| ----------- | ----------------- |
| Chain Based | Synchronous Style |
| then()      | await             |
| catch()     | try-catch         |

---

### Why does Promise.then() run before setTimeout()?

Because Promises use the Microtask Queue which has higher priority than the Callback Queue.

---

### Difference between Microtask and Macrotask?

Microtask:

```javascript
Promise.then();
await queueMicrotask();
```

Macrotask:

```javascript
setTimeout()
setInterval()
I/O
DOM Events
```

---

# 🧠 Cheat Sheet

```text
Callback
   ↓
Callback Hell
   ↓
Promise
   ↓
Promise Chaining
   ↓
Async/Await
   ↓
Fetch API
   ↓
Error Handling
```

---

# 🎯 Final Revision Table

| Concept         | Key Point                           |
| --------------- | ----------------------------------- |
| Callback        | Function passed to another function |
| Promise         | Future value                        |
| resolve()       | Success                             |
| reject()        | Failure                             |
| then()          | Handle success                      |
| catch()         | Handle error                        |
| finally()       | Always runs                         |
| async           | Returns Promise                     |
| await           | Waits for Promise                   |
| Event Loop      | Coordinates execution               |
| Microtask Queue | Promise callbacks                   |
| Callback Queue  | setTimeout callbacks                |
| fetch()         | HTTP requests                       |
| response.json() | Convert JSON to JS Object           |

---

⭐ If this repository helped you, consider giving it a star.
