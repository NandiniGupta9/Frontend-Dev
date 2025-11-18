let str = "Hello";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "Alice", age: 25 };
let nothing = null;
let notDefined;

console.table({
  String: { value: str, type: typeof str },
  Number: { value: num, type: typeof num },
  Boolean: { value: bool, type: typeof bool },
  Array: { value: arr, type: Array.isArray(arr) ? "array" : typeof arr },
  Object: { value: obj, type: typeof obj },
  Null: { value: nothing, type: "null" },
  Undefined: { value: notDefined, type: typeof notDefined }
});
