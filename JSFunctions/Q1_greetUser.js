// Q1: Callback demonstration

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback(); // execute callback
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstration
greetUser("John", showEndMessage);
