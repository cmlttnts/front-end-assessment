function test0() {
  colorfulLog("****** test0", "cyan");
  colorfulLog(`a_var: ${a_var}`);
  colorfulLog(`a_let: ${a_let}`);

  var a_var = "a_var";
  let a_let = "a_let";
}

function test1() {
  colorfulLog("****** test1", "cyan");
  colorfulLog(`a_var: ${a_var}`);
  colorfulLog(`a_const: ${a_const}`);

  var a_var = "a_var";
  const a_const = "a_const";
}

function test2() {
  colorfulLog("****** test2", "cyan");
  const an_object = { a: 1, b: 2 };
  an_object.c = 3;

  const an_array = [1, 2, 3];
  an_array.push(4);

  // how did we change these const variables? Are they supposed to be 'constant'?
  console.log(an_object);
  console.log(an_array);
}

function test3() {
  colorfulLog("****** test3", "cyan");
  {
    let a_let = "a_let";
    var a_var = "a_var";
  }
  colorfulLog(`a_var: ${a_var}`);
  colorfulLog(`a_let: ${a_let}`);
}

// run each function, comment others to see the outputs
test0();
// test1();
// test2();
// test3();

// Hint: google 'function scope vs block scope in javascript'
