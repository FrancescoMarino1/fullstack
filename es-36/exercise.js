const printHello=()=>console.log("hello")

function repetHello(cb){
 const interval=setInterval(cb,1000)
 setTimeout(()=>{
    clearInterval(interval)
},5000)
   
}
repetHello(printHello)


