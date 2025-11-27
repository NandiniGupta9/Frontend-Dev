console.log("Start");

setTimeout(()=> console.log("Macrotask: setTimeout"), 0); // macrotask
Promise.resolve().then(()=> console.log("Microtask: Promise")); // microtask
console.log("Sync log");

console.log("End");


