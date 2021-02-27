// useState has couple of important features

function App() {
  const [appCount, setAppCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setAppCount(appCount + 1)}>App counter increment</button> App count:{" "}
      {appCount}
      <br />
      <br />
      <br />
      {/* lets give a child component the initial value of its state */}
      <Child initialCount={appCount} name="Child1" />
      <br />
      <br />
      <br />
      {/* lets conditionally render Child2 component, if appCount is even, render Child2, if odd remove */}
      {/* see that if you toggle the Child2 ( mount/unmount), its initial state changes */}
      {appCount % 2 === 0 && <Child initialCount={appCount} name="Child2" />}
      <br />
      <br />
      <br />
      <ExpensiveInitialization/>
    </div>
  );
}

function Child({ initialCount, name }) {
  const [count, setCount] = React.useState(initialCount);
  return (
    <div>
      {name}: update the parent counter and this counter and observe the effects
      <br />
      <button onClick={() => setCount(count + 1)}>{name} counter increment</button> count: {count}
    </div>
  );
}

function ExpensiveInitialization(){
  // Look at the difference between these two case, verySlowFunction1 runs every render!!
  const [number1, setNumber1] = React.useState(verySlowFunction1());
  const [number2, setNumber2] = React.useState(() => verySlowFunction2());

  // This is just to force re-render
  const [number3, setNumber3] = React.useState(0);

  return (
    <div>
      Click the button and check console of the browser
      <br/>
      Number3: {number3}
      <br/>
      <button onClick={() => setNumber3(number3 + 3)}>Increment number3</button>
    </div>
  );
}

function verySlowFunction1() {
  // This will run every render
  console.log("This verySlowFunction1 takes very long...");
  return 42;
}

function verySlowFunction2() {
  // This will run once
  console.log("This verySlowFunction2 takes very long...");
  return 42;
}

ReactDOM.render(<App />, document.getElementById("root"));
