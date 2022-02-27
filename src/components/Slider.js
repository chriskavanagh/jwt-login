import "./App.css";
import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + state.step,
        step: state.step,
      };
    case "decrement":
      return {
        count: state.count - state.step,
        step: state.step,
      };
    case "reset":
      return {
        count: 0,
        step: state.step,
      };
    case "updateStep":
      return {
        count: state.count,
        step: action.step,
      };
    default:
      throw new Error();
  }
}

// useReducer
function Counter({ updateStep, min, max }) {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });
  return (
    <>
      <Slider
        min={min}
        max={max}
        onChange={(value) =>
          dispatch({
            type: "updateStep",
            step: value,
          })
        }
      />
      <hr />
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

const Slider = ({ onChange, min, max }) => {
  const [value, setValue] = useState(1);
  return (
    <>
      {value}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value);
          setValue(value);
        }}
      />
    </>
  );
};

export default Slider;
