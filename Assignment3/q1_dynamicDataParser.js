const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

apiData.forEach(value => {
  let num = Number(value);

  if (!isNaN(num) && value !== null && value !== undefined && value !== " ") {
    validNumbers.push({
      original: value,
      number: num,
      boolean: Boolean(value),
      string: String(value)
    });
  } else {
    invalidNumbers.push(value);
  }
});

console.log("VALID ENTRIES:", validNumbers);
console.log("INVALID ENTRIES:", invalidNumbers);
