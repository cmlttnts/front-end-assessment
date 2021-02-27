// Custom hooks are just normal javascript functions which call React hooks inside
// We group related logic inside a custom hook, so we can reuse somewhere else

// Lets look at a custom hook 'useDoSomethingEveryXSecond'
function App() {
  return (
    <div>
      <ChangeBGCEverySecond />
      <ChangeColorEvery2Seconds />
      <ChangeFontSizeEvery3Seconds />
    </div>
  );
}

function ChangeBGCEverySecond() {
  const [isRed, setIsRed] = React.useState(true);

  const toggleBgc = React.useCallback(() => {
    setIsRed((isRed) => !isRed);
  }, [setIsRed]);
  useDoSomethingEveryXSecond(toggleBgc, 1);

  return <div style={{ background: isRed ? "red" : "green" }}>ChangeBGCEverySecond</div>;
}

function ChangeColorEvery2Seconds() {
  const [isRed, setIsRed] = React.useState(true);

  const toggleColor = React.useCallback(() => {
    setIsRed((isRed) => !isRed);
  }, [setIsRed]);
  useDoSomethingEveryXSecond(toggleColor, 2);

  return <div style={{ color: isRed ? "red" : "green" }}>ChangeColorEvery2Seconds</div>;
}

function ChangeFontSizeEvery3Seconds() {
  const [is50px, setIs50px] = React.useState(true);

  const toggleFontSize = React.useCallback(() => {
    setIs50px((is50px) => !is50px);
  }, [setIs50px]);
  useDoSomethingEveryXSecond(toggleFontSize, 3);

  return <div style={{ fontSize: is50px ? "50px" : "25px" }}>ChangeFontSizeEvery3Seconds</div>;
}

// We encapsulate 'every X seconds do something' effect into a custom hook
// so we can use it anywhere with different things with different durations
function useDoSomethingEveryXSecond(callback, xSeconds) {
  React.useEffect(() => {
    let intervalId;
    if (callback) {
      intervalId = setInterval(() => {
        callback();
      }, xSeconds * 1000);
    }

    return () => clearInterval(intervalId);
  }, [callback]);
}

ReactDOM.render(<App />, document.getElementById("root"));
