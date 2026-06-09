console.log("\n===== STRING FUNCTIONS =====");

let str = "Hello World";

console.log("Original String:", str);

console.log("length:", str.length);

console.log("toUpperCase():", str.toUpperCase());

console.log("toLowerCase():", str.toLowerCase());

console.log("charAt(1):", str.charAt(1));

console.log("indexOf('World'):", str.indexOf("World"));

console.log("includes('Hello'):", str.includes("Hello"));

console.log("substring(0,5):", str.substring(0, 5));

console.log("slice(0,5):", str.slice(0, 5));

console.log("replace():", str.replace("World", "JavaScript"));

let words = str.split(" ");

console.log("split(' '):", words);

let text = "   Hello JavaScript   ";

console.log("Before trim:", text);
console.log("After trim:", text.trim());

console.log("startsWith('Hello'):", str.startsWith("Hello"));

console.log("endsWith('World'):", str.endsWith("World"));

let s1 = "Hello";
let s2 = "JavaScript";

console.log("concat():", s1.concat(" ", s2));

console.log("repeat(3):", "Hi ".repeat(3));

let sentence = "apple apple apple";

console.log("replaceAll():", sentence.replaceAll("apple", "orange"));




console.log("===== ARRAY FUNCTIONS =====");

let arr = [10, 20, 30, 40];

console.log("Original Array:", arr);

arr.push(50);
console.log("push(50):", arr);

arr.pop();
console.log("pop():", arr);

arr.unshift(5);
console.log("unshift(5):", arr);

arr.shift();
console.log("shift():", arr);

console.log("length:", arr.length);

console.log("indexOf(30):", arr.indexOf(30));


console.log("includes(20):", arr.includes(20));

let sliced = arr.slice(1, 3);
console.log("slice(1,3):", sliced);

let arr2 = [1, 2, 3, 4, 5];
console.log("Before splice:", arr2);

arr2.splice(2, 1); // remove 1 element at index 2

console.log("After splice:", arr2);

let nums = [5, 2, 8, 1, 9];

nums.sort((a, b) => a - b);

console.log("sort():", nums);

// reverse()
nums.reverse();

console.log("reverse():", nums);
