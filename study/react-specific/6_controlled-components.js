// Form elements have inherent state
// when we type a text inside an input field, browsers keep that state separately
// But React wants to control every state so that it can update DOM accordingly

function App() {
  const [text, setText] = React.useState("");

  console.log("React renders");
  return (
    <div>
      <label htmlFor="controlled_text">Controlled</label>
      <input
        type="text"
        name="controlled_text"
        id="controlled_text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <br />
      <label htmlFor="uncontrolled_text">Uncontrolled</label>
      <input type="text" name="uncontrolled_text" id="uncontrolled_text" />
      {`<=`} React doesn't render after you type in here
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
