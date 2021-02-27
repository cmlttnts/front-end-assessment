// It would be better to understand the prototype structure of javascript before learning classes
// Classes are built on top of these ideas
// We will build the same program with these two different syntax ( they are same behind the scenes )

// PART 0
colorfulLog("****** PART 0 - Functions with Prototype", "cyan");

// this is just a regular function, but, to tell the reader that it is a constructor, we name it with capital letter first
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(`Hi. My name is ${this.name} and i am ${this.age} years old!`);
};

const John25 = new Person("John", 25);
const Alice26 = new Person("Alice", 26);

John25.sayHi();
Alice26.sayHi();

// So we have a constructor function(Person), and it has 'prototype' property, which is an object
console.log(Person.prototype);

//This object is linked when we create an object with 'new Person()'
// That link can be shown with created object's __proto__ field.
console.log(John25.__proto__ === Person.prototype);
console.log(Alice26.__proto__ === Person.prototype);

// So if we add methods to the 'prototype' of the constructor function, the created objects can use those methods by searching their '__proto__'
// Lets now do the inheritance

function Doctor(name, age, branch) {
  // call the parent constructor
  Person.call(this, name, age);
  this.branch = branch;
}

// This is the 'prototype chain', we created Doctor's prototype from Person's prototype, so it inherits sayHi
Doctor.prototype = Object.create(Person.prototype);

Doctor.prototype.sayBranch = function () {
  console.log(`My branch is ${this.branch}`);
}

// This is necessary to correctly assign Doctor constructor not Person
Object.defineProperty(Doctor.prototype, "constructor", {
  value: Doctor,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

const Bob = new Doctor("Bob", 27,  "Heart Surgeon")
Bob.sayHi()
Bob.sayBranch()


// PART 1 -----------------------------------------------------------------------------------------------------
colorfulLog("****** PART 1 - Classes", "cyan");
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi. My name is ${this.name} and i am ${this.age} years old!`);
  }
}


const John25c = new PersonClass("John", 25);
const Alice26c = new PersonClass("Alice", 26);

John25c.sayHi();
Alice26c.sayHi();

// extends keyword makes the chain, so that we inherit
class DoctorClass extends PersonClass {
  constructor(name, age, branch) {
    // super calls parent class constructor
    super(name, age);
    this.branch = branch;
  }
  sayBranch() {
    console.log(`My branch is ${this.branch}`);
  }
}


const Bobc = new Doctor("Bob", 27,  "Heart Surgeon")
//inherits
Bobc.sayHi()
// additional method for own
Bobc.sayBranch()

// As you can see, class syntax hides so much details and it makes it much cleaner, easier to read
// Extra: google "prototype vs class in javascript"
