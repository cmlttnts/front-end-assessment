// PART 0
colorfulLog("****** PART 0", "cyan");

colorfulLog("0-----) typeof null");
console.log(typeof null);

colorfulLog("1-----) typeof {}");
console.log(typeof {});

colorfulLog("2-----) typeof []");
console.log(typeof []);

function func() {}
colorfulLog('3-----) typeof "function func() {}"');
console.log(typeof func);

colorfulLog("4-----) typeof NaN");
console.log(typeof NaN); // NaN = Not a Number? but is a number??

colorfulLog("5-----) NaN === NaN");
console.log(NaN === NaN); // It is not equal to itself??


// PART 1
colorfulLog("****** PART 1", "cyan");

const str1 = "123";
const str2 = "123";

colorfulLog("6-----) str1 === str2");
console.log(str1 === str2);

const num1 = 123;
const num2 = 123;

colorfulLog("7-----) num1 === num2");
console.log(num1 === num2);

colorfulLog("8-----) str1 === num1");
console.log(str1 === num1);

colorfulLog("9-----) str1 == num1 (Double equals!)");
console.log(str1 == num1);


// PART 2
colorfulLog("****** PART 2", "cyan");

const obj1 = { a: 1 };
const obj2 = { a: 1 };

colorfulLog("10-----) obj1 === obj2");
console.log(obj1 === obj2);

const arr1 = [1, 2];
const arr2 = [1, 2];

colorfulLog("11-----) arr1 === arr2");
console.log(arr1 === arr2);


// PART 3
colorfulLog("****** PART 3", "cyan");

const baseArray1 = [1, 2, 3];
const otherArray1 = baseArray1;

colorfulLog("12-----) baseArray1 === otherArray1");
console.log(baseArray1 === otherArray1);

// add item to otherArray1
otherArray1.push(4);

colorfulLog("13-----)  otherArray1");
console.log(otherArray1);
colorfulLog("14-----) baseArray1");
console.log(baseArray1);


// PART 4
colorfulLog("****** PART 4", "cyan");

const baseArray2 = [1, 2, 3];
const otherArray2 = [...baseArray2];

colorfulLog("15-----) baseArray2 === otherArray2");
console.log(baseArray2 === otherArray2);

// add item to otherArray2
otherArray2.push(4);

colorfulLog("16-----) otherArray2");
console.log(otherArray2);
colorfulLog("17-----) baseArray2");
console.log(baseArray2);


// PART 5
colorfulLog("****** PART 5", "cyan");

// Function returning another function, which captures the input variable
function getLogFunction(input) {
  return () => console.log(input)
}

let str3 = "str3 Previous"
const logStr3 = getLogFunction(str3)
str3 = "str3 Next"
// Which str3 value will be printed??
colorfulLog("18-----) logStr3");
logStr3()


// Lets try same thing with an object
let obj3 = {
  field: "obj3 Previous"
}

const logObj3 = getLogFunction(obj3)

obj3.field = "obj3 Next"

// Which value will be printed ??
colorfulLog("19-----) logObj3");
logObj3()


// Hint: google 'value vs reference types in javascript'
