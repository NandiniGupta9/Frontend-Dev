const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

let valid = [];
let invalid = [];

transactions.forEach(trx => {
  try {
    if (trx === null) throw new Error("Null entry");

    if (!trx.id || trx.amount === undefined) {
      throw new Error("Missing id or amount");
    }

    if (trx.amount < 0) throw new Error("Negative amount");

    valid.push(trx);

  } catch (err) {
    invalid.push({ trx, error: err.message });
  }
});

console.log("VALID:", valid);
console.log("INVALID:", invalid);
console.log(`Success: ${valid.length}, Failed: ${invalid.length}`);
