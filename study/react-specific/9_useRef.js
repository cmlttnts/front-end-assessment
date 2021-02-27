// useRef is used to access React or DOM elements manually
/// they can also be used to keep track of a value inside a functional component
// when you want to just store a value between renders
// and the value's change shouldn't cause re-render, we use can useRef

function App() {
  // initialize as null, returned object has .current property with the value
  const domRef = React.useRef(null);
  console.log("Before render, domRef empty: ", domRef);

  React.useEffect(() => {
    // Since useEffect runs after render, we get the non-null ref value
    console.log("After render, domRef ready: ", domRef);
  })

  return (
    <div ref={domRef}>
      <JustStoreValue hasButton/>
      <br/>
      <JustStoreValue />
    </div>
  );
}

function JustStoreValue({ hasButton }) {
  const [toggle, setToggle] = React.useState(false);
  const numOfRenders = React.useRef(0);
  numOfRenders.current++;

  return (
    <div>
      this component rendered {numOfRenders.current} times
      {hasButton && (
        <div>
          <button onClick={() => setToggle(!toggle)}>Update State to Render More</button>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
