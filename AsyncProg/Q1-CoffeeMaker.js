// Async Coffee Maker Simulation

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => Math.random()>0.2 ? resolve("Water boiled") : reject("Boiling failed"), 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => Math.random()>0.2 ? resolve("Coffee brewed") : reject("Brewing failed"), 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => Math.random()>0.2 ? resolve("Coffee poured into cup") : reject("Pouring failed"), 1200);
    });
}

// Promise chaining
boilWater()
.then(res => { console.log(res); return brewCoffee(); })
.then(res => { console.log(res); return pourCoffee(); })
.then(res => { console.log(res); console.log("Coffee ready for the team!"); })
.catch(err => console.error("Error:", err));
