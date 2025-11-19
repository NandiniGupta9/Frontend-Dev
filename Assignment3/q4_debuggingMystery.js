"use strict";

// ERROR REASON: greeting is not declared → strict mode blocks implicit globals

function showMessage() {
  let greeting = "Welcome"; // FIXED (added let)
  console.log(greeting);
}

showMessage();

// Explanation:
// In strict mode, variables MUST be declared using let, var, or const.
