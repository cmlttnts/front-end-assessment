// When we want to do a side effects/ expensive operations
// Like api calls, manual dom interactions
// We want to use the useEffect hook, to synchronize our component state with side effects that needs to be done
// state changes => Dom updated => useEffect runs
// The function we pass to useEffect tries to run after every render but checks the dependency array first

function App() {
  console.log("---------------App rendered ---------------");
  const [someDependency, setSomeDependency] = React.useState(0);
  const [notADependency, setNotADependency] = React.useState(0);
  const [showMountExample, setShowMountExample ] = React.useState(true);

  return (
    <div>
      <div><button onClick={() => setSomeDependency(old => old+1)}> Increment Dependency</button></div>
      <div><button onClick={() => setNotADependency(old => old+1)}> Increment Non-Dependency</button></div>
      <div><button onClick={() => {
        setShowMountExample(old => !old)
        console.log(!showMountExample ? "/////Second Component mounted" : "/////Second Component Unmounted");
      }}> Toggle Mount Example</button></div>


      {/* Please check out these components and their useEffect usage */}
      <EveryRender/>
      {showMountExample && <InitialMount/>}
      <AfterRenderIfDependencyChanged dep={someDependency}/>
    </div>
  );
}

// Component 1
function EveryRender() {

  React.useEffect(() => {
    console.log("*No dependency array passed, meaning, Runs after every render");

    // Cleanup function
    // React runs this returning function before the next effect, so the inside of the function and this follow each other
    return () => console.log("*Runs before the next effect");
  })

  return <div>EveryRender</div>
}

// Component 2
function InitialMount() {

  React.useEffect(() => {
    console.log("*****Empty dependency array, meaning, Runs after initial mount");

    // Only runs when we unmount this component, click toggle mount button to see
    return () => console.log("*****Runs after unmount");
  }, [])

  return <div>InitialMount</div>
}

// Component 3
function AfterRenderIfDependencyChanged({dep}) {

  React.useEffect(() => {
    console.log("**********Dependency array has items, meaning, it will try to run after every render if anything changed", dep );

    return () => console.log("**********Runs before next effect if dependency changed");
  }, [dep])

  return <div>AfterRenderIfDependencyChanged, dep: {dep}</div>
}




ReactDOM.render(<App />, document.getElementById("root"));
