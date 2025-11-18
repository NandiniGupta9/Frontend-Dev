let secret = Math.floor(Math.random() * 50) + 1;
let userGuess = 23; // test value

if (userGuess === secret) {
  console.log("Correct guess!");
} else if (Math.abs(userGuess - secret) <= 3) {
  console.log("Very close!");
} else {
  console.log(userGuess > secret ? "Too high" : "Too low");
}
