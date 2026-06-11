//=======Spread Operator with Arrays=====
console.log("=======Spread Operator with Arrays=====");
//Copy Array
let arr1 = [10, 20, 30];
let arr2 = [...arr1];
console.log(`Array 1 ${arr1}`);
console.log(`Array 2 ${arr2}`);

arr2[0] = 100;
console.log(`Array 1 ${arr1}`);
console.log(`Array 2 ${arr2}`);

let arr3 = arr1;

arr3[0] = 100;
console.log(`Array 1 : ${arr1}`);
console.log(`Array 3 : ${arr3}`);

//Merge Arrays
console.log("\n\n=======Merge Arrays=====");
let a = [10, 20, 30];
let b = [40, 50, 60];
let c = [...a, ...b];
console.log(`Array a : ${a}`);
console.log(`Array b : ${b}`);
console.log(`Merge of a and b: Array c : ${c}`);

let result = [...a, ...b, ...c];
console.log(`Merge a,b,c : result${result}`);

// what you would be thinking is After Rohan, Tarun, 'Iam inside settimeout1'
// should be printed
// but that will not happen due to javascript's assync nature.
// It doesnt pause for 3 seconds between the execution.
// setTimeout(()=> {
//     console.log("Iam inside settimeout 1")
// },3000);

// setTimeout(()=> {
//     console.log("Iam inside settimeout 2")
// }, 1000);

// console.log("The End")

function sum(a, b) {
  console.log(a + b);
}
function multiply(a, b) {
  console.log(a * b);
}
function sub(a, b) {
  console.log(Math.abs(a - b));
}
function calc(a, b, operation) {
  operation(a, b);
}
calc(9, 3, sub);

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);

    if (getNextData) {
      getNextData();
    }
  }, 1000);
}

getData(1, function () {
  getData(2);
});
