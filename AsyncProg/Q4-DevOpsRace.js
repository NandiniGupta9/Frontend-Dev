function serverA() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> Math.random()>0.2 ? resolve("Server A done") : reject("Server A failed"), 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> Math.random()>0.2 ? resolve("Server B done") : reject("Server B failed"), 3000);
    });
}

Promise.all([serverA(), serverB()])
.then(res=> console.log("Deployment completed for all servers:", res))
.catch(err=> console.error("Deployment failed:", err));

Promise.race([serverA(), serverB()])
.then(res=> console.log("Fastest response:", res))
.catch(err=> console.error("Fastest response failed:", err));
