const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

let clean = [];

rawData.forEach((item, index) => {
  try {
    let parsed = JSON.parse(item);

    if (!parsed.user || !parsed.age) {
      throw new Error("Missing user or age");
    }

    parsed.age = Number(parsed.age);

    if (parsed.age < 18) throw new Error("Underage user");

    clean.push(parsed);

  } catch (err) {
    console.log(`Line ${index + 1}: ${err.message}`);
  }
});

console.log("CLEAN DATA:", clean);
