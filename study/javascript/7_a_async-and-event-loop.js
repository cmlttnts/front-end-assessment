// We are saying "after 0 ms, call this function"
// So it should log first, right?
setTimeout(() => {
  console.log("1st log with setTimeOut 0 ms");
}, 0);

// We are immediately resolving the promise, it should immediately log, right?
Promise.resolve().then(() => console.log("2nd log with immediately resolved promise"))

requestAnimationFrame(() => console.log("3rd log with requestAnimationFrame"))

// After 5000ms (5 seconds) call this function
setTimeout(() => {
  console.log("4th log with setTimeOut 5000 ms");
}, 5000);

console.log("5th log, sync call");
console.log("6th log, sync call");
console.log("7th log, sync call");
console.log("8th log, sync call");

// So why the order of logs are not in the order we call them?
// Hint: https://vimeo.com/254947206 A nice video explaining the concepts
