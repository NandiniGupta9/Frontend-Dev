// Q7: Closure example

function makeMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

const triple = makeMultiplier(3);

console.log(triple(5)); // 15

// Closure explanation:
// The inner function remembers 'multiplier' even after makeMultiplier finishes.
