const isLogged = true;

const login = (isLogged) => {
    return new Promise((resolve, reject) => {
        if(isLogged == true) {
            resolve(Math.random())
        } else {
            reject(new Error("Not logged"))
        }
    })
}
const userData = (randomNumber) => {
    return new Promise((resolve, reject) => {
        if(randomNumber > 0.5) {
            resolve({name: "Jhon", age: 25});
        } else {
            reject(new Error("Random number less than 0.5"))
        }
    })
}

login(isLogged).then(userData)
    .then((resolve) => console.log(resolve))
    .catch((error) => console.log(error))
