let expenses = [5000, 1200, 15000, 3000, 2000]; 
let total = expenses.reduce((a, b) => a + b, 0);
let average = total / expenses.length;

total += total * 0.10; // Add 10% tax
let finalAmount = total.toFixed(2);

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount after Tax:", finalAmount);
