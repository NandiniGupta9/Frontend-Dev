function loadProfile(){ return new Promise((r,re)=> setTimeout(()=> Math.random()>0.2 ? r("Profile Loaded") : re("Profile Failed"),2000)); }
function loadPosts(){ return new Promise((r,re)=> setTimeout(()=> Math.random()>0.2 ? r("Posts Loaded") : re("Posts Failed"),1500)); }
function loadMessages(){ return new Promise((r,re)=> setTimeout(()=> Math.random()>0.2 ? r("Messages Loaded") : re("Messages Failed"),1000)); }

async function loadAll(){
    const start = Date.now();
    const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
    results.forEach((res,i)=> console.log(`Module ${i+1}:`, res.status, res.value || res.reason));
    console.log("Total Time:", (Date.now()-start)/1000,"s");
}
loadAll();
