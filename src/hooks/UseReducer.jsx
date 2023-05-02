import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count === 0 ? 0 : state.count - 1 };
    case "color":
      return { ...state, color: !state.color };
    case "userInput":
      return { ...state, userInput: action.payload };
    default:
      throw new Error();
  }
};

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  USER_INPUT: "userInput",
  COLOR: "color",
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: true,
    userInput: "",
  });
  return (
    <main className="App" style={{ color: state.color ? "#FFF" : "#FFF952" }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: ACTIONS.USER_INPUT, payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTIONS.COLOR })}>Color</button>
      </section>
      <br />
      <p>{state.userInput}</p>
    </main>
  );
};

export default UseReducer;
