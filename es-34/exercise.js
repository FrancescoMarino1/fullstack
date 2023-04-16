const printHello =()=>{
    console.log("Hello")
}
const printAsyncName = (cb, string)=>{
setTimeout(cb,1000)
setTimeout(()=>{console.log(string)},2000)
}

printAsyncName(printHello, "Francesco")