// Nested Callbacks (Callback Hell)
function step(name, cb){ setTimeout(()=> { console.log(name); cb(); },1000); }

step("Design", ()=> {
    step("Build", ()=> {
        step("Test", ()=> {
            step("Deploy", ()=> {
                step("Celebrate", ()=> { console.log("Pipeline done"); });
            });
        });
    });
});

// Async/Await version
async function pipeline() {
    async function delay(name){ return new Promise(r=>setTimeout(()=>{console.log(name); r();},1000)); }
    await delay("Design");
    await delay("Build");
    await delay("Test");
    await delay("Deploy");
    await delay("Celebrate");
    console.log("Pipeline done with async/await");
}

/*
Async/await improves readability by avoiding deeply nested callbacks.
*/
pipeline();
