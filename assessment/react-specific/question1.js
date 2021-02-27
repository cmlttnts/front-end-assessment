// ASSESSMENT:
// You will be implementing a table with its content fetched from https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10
// You will use functional components and hooks
// And a simple table styling in question1.css
// An example UI of a working version is presented in question1.gif
//

// BONUS POINT: implement pagination feature with Previous-Next buttons
// _start and _limit are query parameters which you can use to fetch some of the items, which is called 'pagination'
// _limit is always 10 for our case, but _start parameter can be changed to fetch portions of that data


// SOLUTION:
// React and ReactDOM is already imported in index.html
function App() {
  return (
    <p>Hello from question1!</p>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
