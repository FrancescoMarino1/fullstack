const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";


console.log(person1);
console.log(person2);
// a causa di p2=p1 non si puo modificare il nome solo del person2 dato che non si va a creare un nuovo oggetto ma si va a modificare quello 
// gia esistente 

