// setState calls don't immediately update the state

function App() {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [number3, setNumber3] = React.useState(0);

  return (
    <div>
      <button onClick={increment1}>INCREMENT1</button> : {number1}
      <br/>
      <button onClick={increment2}>INCREMENT2</button> : {number2}
      <br/>
      <button onClick={increment3}>INCREMENT3</button> : {number3}
    </div>
  );

  function increment1() {
    setNumber1(number1 + 1);
    // see that this console.log prints previous value
    console.log(number1);
  }

  function increment2() {
    // Calling it 5 times, adds 5?
    setNumber2(number2+1)
    setNumber2(number2+1)
    setNumber2(number2+1)
    setNumber2(number2+1)
    setNumber2(number2+1)

    // old number2?
    console.log(number2);
  }

  function increment3() {
    //Still calling it 5 times but giving a function as input, is this different?
    setNumber3(oldNumber3 => oldNumber3+1)
    setNumber3(oldNumber3 => oldNumber3+1)
    setNumber3(oldNumber3 => oldNumber3+1)
    setNumber3(oldNumber3 => oldNumber3+1)
    setNumber3(oldNumber3 => oldNumber3+1)

    // This is still old number3?
    console.log(number3);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
