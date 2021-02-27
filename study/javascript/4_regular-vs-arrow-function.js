// PART 0
colorfulLog("****** PART 0", "cyan");

const John = {
  firstName: "John",

  printRegular: function () {
    console.log(this.firstName);
  },

  printArrow: () => {
    console.log(this.firstName);
  },
};

colorfulLog("John.printRegular()");
John.printRegular();

colorfulLog("John.printArrow()");
John.printArrow();


// PART 1
colorfulLog("****** PART 1", "cyan");

function outer1() {
  colorfulLog("1------) Regular function inside");
  colorfulLog("1.1------) outer1 this");
  console.log(this);

  function inner() {
    colorfulLog("1.2------) inner1 this");
    console.log(this);
  }

  inner();
}
//call outer1 function
outer1.call({ a: "hello" });

function outer2() {
  colorfulLog("2------) Arrow function inside");
  colorfulLog("2.1------) outer2 this");
  console.log(this);

  const inner = () => {
    colorfulLog("2.2------) inner2 this");
    console.log(this);
  };

  inner();
}
// call outer2 function
outer2.call({ a: "hello" });

// Hint: google 'regular function vs arrow function'
