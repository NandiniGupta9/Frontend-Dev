// Without strict: duplicates allowed, globals created silently
// With strict: duplication + undeclared vars throw errors

"use strict";

function demo(a, b) {
  let total = 10; // fixed (no global leak)
  console.log(total);
}

demo(5, 10);

// ES6 Correct Version avoids duplicate params.
