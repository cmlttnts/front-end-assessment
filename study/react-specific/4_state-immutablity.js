// See that if we modify/mutate state, it doesn't cause DOM update
// only when we create a new state (remember triple equality "===" check), React understands something has changed

function App() {
  const [mutable, setMutable] = React.useState({ a: 1 });
  const [immutable, setImmutable] = React.useState({ b: 1 });

  return (
    <div>
      <button onClick={incrementMutable}>MUTATION INCREMENT</button> : a: {mutable.a}
      <br />
      <br />
      <button onClick={incrementImmutable}>CREATE NEW OBJECT INCREMENT</button> : b: {immutable.b}
    </div>
  );

  function incrementMutable() {
    mutable.a++;
    setMutable(mutable);
  }

  function incrementImmutable() {
    const newObj = { ...immutable };
    newObj.b++;
    setImmutable(newObj);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
