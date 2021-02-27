// PART 0
colorfulLog("***** PART 0", "cyan");

function outer() {
  let outer_var = "outer_var";
  let numOfCalls = 0;
  console.log("outer will be called once and returns but variables still live!!");

  return function () {
    console.log("I have access to outer scope, outer_var: ", outer_var);

    console.log("I can also update variables from outer scope");
    numOfCalls++;
    console.log("You called this function ", numOfCalls, " time/times");
  };
}

// lets get the inner function first
const inner = outer();
inner();
inner();
inner();
inner();


// PART 1
colorfulLog("**** PART 1", "cyan");
// you should know that these two loops have different behavior

for (let x = 0; x < 3; x++) {
  setTimeout(() => {
    console.log(`*for loop, x: ${x}`);
  });
}

let x = 0;
while (x < 3) {
  setTimeout(() => {
    console.log(`*while loop, x: ${x}`);
  });
  x++;
}


// PART 2
// There are 3 buttons on the page and we select them
const allButtons = document.querySelectorAll("button");

// We want to log button's number when we click them
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", () => {
    console.log(`Button ${i + 1} clicked`);
  });
}

// Why doesn't this work?
// How can we change it so clicking Button 1 logs "Button 1 clicked"

// Hint: google 'closure in javascript'
