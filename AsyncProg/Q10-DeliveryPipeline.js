function step(name){
    return new Promise((resolve,reject)=>{
        const delay = Math.random()*1000 + 1000; // 1-2s
        setTimeout(()=> Math.random()>0.2 ? resolve(name) : reject(name+" failed"), delay);
    });
}

async function runPipeline(){
    try{
        console.log("Start Pipeline");
        console.log("Step 1:", await step("Order taken"));
        console.log("Step 2:", await step("Food prepared"));
        console.log("Step 3:", await step("Package ready"));
        console.log("Step 4:", await step("Out for delivery"));
        console.log("Delivery completed!");
    }catch(err){
        console.error("Pipeline failed!", err);
    }
}

runPipeline();
