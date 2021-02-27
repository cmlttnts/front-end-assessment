// Class components are an old way of writing React components, functional version is the most used currently
// You should still have an idea how these two compare
// Lets see how we can build a counter example with both versions

// The root component
function App() {
  return (
    <>
      <ClassComp start={10}/>
      <FunctionalComp start={100}/>
    </>
  )
}

// Class component version
class ClassComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.start
    }
    // This binding is necessary to make `this` work in the callback
    // Remember the javascript study materials `this-keyword.js`
    this.increment = this.increment.bind(this)
  }
  increment() {
    this.setState({count: this.state.count+1})
  }
  render() {
    return (
        <div>
          <button onClick={this.increment}>Class button</button>, count: {this.state.count}
        </div>
    )
  }
}

// Functional component version
// As you can see, functional components are much less code, more concise
function FunctionalComp(props) {
  const [count, setCount] = React.useState(props.start)
  return (
    <div>
          <button onClick={() => setCount(count +1)}>Functional button</button>, count: {count}
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
