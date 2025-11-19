const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;
let operation = "divide";

try {
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;

    case "subtract":
      result = num1 - num2;
      break;

    case "power":
      result = Math.pow(num1, num2);
      break;

    case "root":
      if (num1 < 0) throw new Error("Root of negative number");
      result = Math.sqrt(num1);
      break;

    case "divide":
      if (num2 === 0) throw new Error("Cannot divide by zero");
      result = num1 / num2;
      break;

    default:
      throw new Error("InvalidOperationError");
  }

  console.log(`Operation: ${operation}\nResult: ${result}`);

} catch (err) {
  console.log("ERROR:", err.message);
}
