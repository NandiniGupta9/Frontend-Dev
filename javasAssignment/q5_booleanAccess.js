let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log(isSecure ? "Secure" : "Unsafe");

// Change values and test
isOwnerInside = false;
console.log(isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");
