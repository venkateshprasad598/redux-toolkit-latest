import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { oneSliceActions } from "./store/oneSlice";
import { twoSliceActions } from "./store/twoSlice";

function App() {
  const dispatch = useDispatch();
  const oneCounter = useSelector((store) => store.one.counterOne);
  const twoCounter = useSelector((store) => store.two.counterTwo);

  console.log(oneCounter, twoCounter);
  return (
    <div className="App">
      <p>One store {oneCounter}</p>
      <p>Two store {twoCounter}</p>
      <button onClick={() => dispatch(oneSliceActions.increment())}>
        INC 1
      </button>
      <button onClick={() => dispatch(oneSliceActions.decrement())}>
        DEC 1
      </button>
      <button onClick={() => dispatch(twoSliceActions.increment())}>
        INC 2
      </button>
      <button onClick={() => dispatch(twoSliceActions.decrement())}>
        DEC 2
      </button>
      <button onClick={() => dispatch(oneSliceActions.incrementByAmount(5))}>
        Increase store one by 5
      </button>
      <button onClick={() => dispatch(twoSliceActions.incrementByAmount(5))}>
        Increase store two by 5
      </button>
    </div>
  );
}

export default App;
