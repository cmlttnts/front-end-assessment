// Promise based version
const a_promise = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log("promise version json:", json))
  .catch((err) => console.log("promise version error:", err));

// we can chain more then blocks
a_promise.then(() => console.log("do this after promise version"));

console.log("When this log will be printed??");

// Async function version with awaits
async function getTodo1() {
  // To catch errors in this version, we need try-catch block
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("After await response:", response);
    const json = await response.json();
    console.log("After await json: ", json);
  } catch (err) {
    console.log("catch block inside async:", err);
  } finally {
    console.log("This part runs even after there is an error");
  }
}

// Async functions return promises automatically
// So we can chain again
getTodo1().then(() => console.log("do this after async version"));

// Hint: google 'callbacks vs promises vs async await'
