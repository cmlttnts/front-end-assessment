// PART 0
colorfulLog("**** PART 0", "cyan")

const obj = {
  key1: "value1",
  key2: 42,
  key3: [1,2,3],
  key4: function () {
    console.log("key4 function");
  }
}
colorfulLog("Object.keys(obj)")
console.log(Object.keys(obj));

colorfulLog("Object.values(obj)")
console.log(Object.values(obj));

colorfulLog("Object.entries(obj)")
console.log(Object.entries(obj));

const obj1 = {
  key1: "obj1_value1",
  key2: undefined,
}

const obj2 = {
  key1: "obj2_value1",
  key2: "obj2_value2",
  key3: "obj2_value3"
}

// Last spreaded object wins
colorfulLog("{...obj1, ...obj2}")
console.log({...obj1, ...obj2});

// See the difference between key2: undefined and key3 not existing in obj1
colorfulLog("{...obj2, ...obj1}")
console.log({...obj2, ...obj1});



// PART 1
colorfulLog("**** PART 1", "cyan")

const simpleArray = [1, 2, 3, 4]

const mappedArray = simpleArray.map(x => 2*x)
colorfulLog("mappedArray")
console.log(mappedArray);

// even numbers we want to keep
const filteredArray = simpleArray.filter(x => x % 2 === 0)
colorfulLog("filteredArray");
console.log(filteredArray);

// Reduces the array into one value
const reducedToSum = simpleArray.reduce((accum, item) => accum+item, 0)
colorfulLog("reducedToSum");
console.log(reducedToSum);

// Extra: Do exercise with other array methods: .forEach(), .find(), .sort(), .join(), .slice(), .splice()


// When trying to copy an array of objects, be careful
const arrayOfObjects = [{a:1}, {a:2}, {a:3}]

const newArrayOfObjects = [...arrayOfObjects]

// See that arrays are different
colorfulLog("arrayOfObjects === newArrayOfObjects")
console.log(arrayOfObjects === newArrayOfObjects);

// Since arrays are different, changing something in one array shouldn't affect the other, right?
colorfulLog("Before changing newArrayOfObjects, arrayOfObjects[0].a: ")
console.log(arrayOfObjects[0].a);

// lets change something from the new array
newArrayOfObjects[0].a = 11111

colorfulLog("After changing newArrayOfObjects, arrayOfObjects[0].a")
console.log(arrayOfObjects[0].a);

// Why did the old array change as well? Think about the study materials at 1_data-types-and-equality.js

// Hint: google 'shallow copy vs deep copy in javascript'
