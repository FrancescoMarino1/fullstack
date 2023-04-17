const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser() {
  localStorage.setItem("User", JSON.stringify(user));
}

function userData() {
  const userDetails = localStorage.getItem("User");
  console.log(JSON.parse(userDetails));
}