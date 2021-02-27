// PART 0
colorfulLog("***** PART 0", "cyan")

function func(...params) {
  colorfulLog("this");
  console.log(this);
  colorfulLog("params");
  console.log(params);
}

// There are different ways to call a function
colorfulLog("func(1,2,3)");
func(1, 2, 3);

colorfulLog('func.call(".call", 1, 2, 3)');
func.call(".call", 1, 2, 3);

colorfulLog('func.apply(".apply", [1,2,3])');
func.apply(".apply", [1, 2, 3]);

const boundFunc = func.bind(".bind");
colorfulLog("boundFunc(1,2,3) After .bind");
boundFunc(1, 2, 3);

colorfulLog("new func(1,2,3)");
const obj = new func(1, 2, 3);

// So how does 'this' value get assigned?
// Exercise: Try these calls with an arrow function

// PART 1
colorfulLog("***** PART 1", "cyan")

function callInputFunction(inputFunction) {
  inputFunction();
}

function callInputFunctionWithDifferentThis(inputFunction) {
  inputFunction.call({ firstName: "Different This" }); // .apply would also work
}

class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
  printFirsName() {
    console.log(this.firstName);
  }
}

const foo = new Person("foo");
colorfulLog("foo.printFirsName()");
foo.printFirsName(); // Works

colorfulLog("callInputFunction(foo.printFirsName)");
callInputFunction(foo.printFirsName); // Give the function to another function to call, doesn't work!!!
// comment out these two lines above after seeing the error

colorfulLog("callInputFunctionWithDifferentThis(foo.printFirsName)");
callInputFunctionWithDifferentThis(foo.printFirsName);

// Extra: google 'strict mode in javascript'
