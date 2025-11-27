// Callback version
// function fetchBugs(callback) {
//   setTimeout(()=>callback(["UI glitch","API timeout","Login failure"]),1000);
// }

// Promise version
function getBugs() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            Math.random()>0.3 ? resolve(["UI glitch","API timeout","Login failure"]) : reject("API Failed");
        }, 1000);
    });
}

getBugs()
.then(bugs => console.table(bugs))
.catch(err => console.error(err));
