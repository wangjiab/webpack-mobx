import "./style.less";
function test() {
    return new Promise((resolve, rejects) => {
        if (Math.random() > 0.5) {
            resolve("resolve")
        } else {
            rejects("rejects")
        }
    })
}
test().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
console.log("wjb22")