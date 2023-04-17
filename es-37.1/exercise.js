const number = 15;
let promise = new Promise(function(resolve, reject) {
   if (number > 10){
    resolve("Greater then 10")
   }else{
    reject("Less the 10")
   }
  });

  promise.then((resolve) => console.log(resolve))
    .catch((error) => console.log(error))