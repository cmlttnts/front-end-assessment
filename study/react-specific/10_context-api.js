// React's Context api lets us share some data across multiple components down the tree

const THEMES = {
  dark: { bg: "black", color: "white" },
  light: { bg: "white", color: "black" }
};
// Default can be set here if you don't want to use Provider while testing
const ThemeContext = React.createContext(THEMES.light);

function ThemeProvider({ children }) {
  // starting value can be different
  // To be able to toggle, you need to hold it in a state variable
  return <ThemeContext.Provider value={THEMES.dark}>{children}</ThemeContext.Provider>;
}

function App() {
  return (
    <div>
      <ThemeProvider>
        <GrandParent />
      </ThemeProvider>
      <CompNOTProvided />
    </div>
  );
}

function GrandParent() {
  return (
    <div>
      <Parent />
    </div>
  );
}

function Parent() {
  return (
    <div>
      <ChildProvided />
    </div>
  );
}

function ChildProvided() {
  // We didn't need to pass props from GrandParent to Child
  const theme = React.useContext(ThemeContext);

  return (
    <div>
      <button style={{ background: theme.bg, color: theme.color }}>Deep Child button</button>
    </div>
  );
}

function CompNOTProvided() {
  // We didn't need to pass props again, it is outside of the provider so it uses default(don't use in normal application, only testing)
  const theme = React.useContext(ThemeContext);

  return (
    <div>
      <button style={{ background: theme.bg, color: theme.color }}>NOT provided button</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// Hint: Google 'prop drilling'
