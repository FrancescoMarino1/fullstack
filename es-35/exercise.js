const printHello =()=> console.log("hello")
function repetHello(cb){
    setInterval(cb,1000)
}
repetHello(printHello)