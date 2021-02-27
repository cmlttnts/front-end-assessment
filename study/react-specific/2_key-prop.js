// Array of expressions are handled differently in React
// we need to pass a unique key prop to each item so that React keeps track of these items

function App() {
  const arrayOfTexts = ["Text1", "Text2", "Text3"];

  return (
    <>
      {/* See the warning from this line in the console */}
      {arrayOfTexts.map((text) => (
        <p>{text}</p>
      ))}
      <hr />
      {/* Since each text are different, it is okay to be a key */}
      {arrayOfTexts.map((text) => (
        <p key={text}>{text}</p>
      ))}
      <hr />
      <BeCarefulWhenKeyIsIndex />
    </>
  );
}

// Lets demonstrate why assinging index value as key prop is a bad idea
function BeCarefulWhenKeyIsIndex() {
  const [someLabels, setSomeLabels] = React.useState([
    "Be",
    "Careful"
  ]);

  return (
    <div>
      <p>Write some text to an input and then click the button below</p>
      {someLabels.map((text, index) => (
        <label htmlFor={text} key={index}>
          {text}:
          <input />
          <br />
        </label>
      ))}
      <button onClick={() => setSomeLabels(["Added", ...someLabels])}>
        Add input field at the start
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
