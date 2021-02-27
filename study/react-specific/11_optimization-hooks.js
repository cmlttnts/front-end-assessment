// Since react keeps track of changes (props changes, state changes, dependency array changes) with 'Object.is' comparison ( similar to === triple equals)
// When we create a new object each render, that makes a different object which causes more renders
// We sometimes want to keep the same reference so that we can avoid unnecessary renders

/*
  Remember, creating same object leads to different reference, so not equal
  const a = {}
  const b = {}
  a === b => false

*/
function App() {
  console.log("----------------------------App rendered");
  const [someState, setSomeState] = React.useState(true);

  return (
    <div>
      <UseMemoExample />
      <UseCallbackExample />
      {/* After initial render, everything runs, click this button to force re-render, and see which components run their useEffects */}
      <button onClick={() => setSomeState(!someState)}>Toggle Some State To Force Render</button>
    </div>
  );
}

function UseMemoExample() {
  console.log("-----------UseMemoExample rendered, new objects are created");
  const anObject = { msg: "Hello World" };

  const memoizedObject = React.useMemo(() => {
    return { msg: "Hello World" };
  }, []); // since it doesn't depend on anything, calculate once, keep the reference

  return (
    <div>
      <MemoComp someProp={anObject} name="**useMemo NOT USED" />
      <MemoComp someProp={memoizedObject} name="**useMemo USED" />
    </div>
  );
}

function MemoComp({ someProp, name }) {
  React.useEffect(() => {
    console.log(name, " -> Doing expensive side effect");
    console.log(someProp); // so that we use it inside useEffect
  }, [someProp, name]);

  return <div>{name}</div>;
}

function UseCallbackExample() {
  console.log("-----------UseCallbackExample rendered, new functions are created");
  const fetch1 = () => {
    console.log("Fetched expensive stuff without useCallback");
  };
  const fetch2 = React.useCallback(() => {
    console.log("Fetched expensive stuff with useCallback");
  }, []);

  return (
    <div>
      <CallbackComp fetcher={fetch1} name="**useCallback NOT USED" />
      <CallbackComp fetcher={fetch2} name="**useCallback USED" />
    </div>
  );
}

function CallbackComp({ fetcher, name }) {
  React.useEffect(() => {
    console.log(name, " -> Doing expensive side effect");
    fetcher(); // use the function inside so that it is a dependency
  }, [fetcher, name]);

  return <div>{name}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
