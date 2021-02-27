// useReducer is a state management tool for more complex situation where useState doesn't fit
// It is inspired from the redux library
// IF you have more than one state variables that depend each other, you can use useReducer

// All of these values have relation, when it is loading we can't have data or error
// Similary, if data arrives, no loading or error, keeping all these 3 states in useStates would be a bad idea
const INITIAL_VALUE = {
  loading: false,
  error: false,
  data: null
};

const ACTION_TYPES = {
  START_FETCH: 0,
  FETCH_SUCCESS: 1,
  FETCH_FAILURE: 2
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.START_FETCH:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case ACTION_TYPES.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_VALUE);

  // Lets fetch some data on mount
  // api call is a side-effect, goes inside useEffect
  React.useEffect(() => {
    // Slow the network speed from dev tools to see loading, your internet may be too fast!
    // Before calling, lets dispatch an action for starting
    dispatch({type: ACTION_TYPES.START_FETCH})

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if(response.ok) {
          return response.json()
        }
        throw new Error("HTTP RESPONSE ERROR")

      })
      // We got the json, lets call it success!!
      .then((json) => dispatch({type: ACTION_TYPES.FETCH_SUCCESS, payload: json}))
      // Any error, we dispatch error action
      // To fake an error, change url to something incorrect
      .catch(err => {
        console.log(err);
        dispatch({type: ACTION_TYPES.FETCH_FAILURE})
      })
  }, []);

  return (
    <div>
      {state.loading && <p>Loading ....</p>}
      {state.error && <p>ERROR HAPPENED!!</p>}
      {state.data && <p>Here is the data fetched: {JSON.stringify(state.data)}</p>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
