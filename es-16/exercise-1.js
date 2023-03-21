// Class definition

const developer = new Person("Mario", "Rossi");
console.log(developer.firstName + " " + developer.lastName);

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
