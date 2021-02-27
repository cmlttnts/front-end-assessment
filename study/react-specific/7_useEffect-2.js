// Some of the pitfalls of useEffect

export default function App() {
  return (
    <div>
      <DependencyWhichDoesntCauseRender />

      {/* uncomment below to see the infinite loop problem, may freeze your browser!! */}
      {/* <InifiniteRenderLoop /> */}
    </div>
  );
}

let counter = 0;

function DependencyWhichDoesntCauseRender() {

  React.useEffect(() => {
    console.log("DependencyWhichDoesntCauseRender: useEffect Run ", counter);
  }, [counter]);

  return (
    <div>
      counter: {counter}
      <br/>
      <button onClick={() => counter++}>Add 1 to counter</button>
    </div>
  );
}


function InifiniteRenderLoop() {

  const [counter, setCounter] = React.useState(0)

  React.useEffect(() => {
    // component renders => useEffect runs => useEffect updates state => component renders => ...... inifinity
    console.log("InifiniteRenderLoop: useEffect Run ", counter);
    setCounter(counter+1)
  }, [counter]);

  return (
    <div>
      counter: {counter}
      <br/>
    </div>
  );

}


ReactDOM.render(<App />, document.getElementById("root"));
