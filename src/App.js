import "./styles.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrementCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrementCount = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncrementSteps = () => {
    setStep((prev) => prev + count);
  };
  const handleDecrementSteps = () => {
    setStep((prev) => prev - count);
  };

  let d = new Date();

  function changeDate() {
    d.setDate(d.getDate() + step);
  }

  changeDate(); /* this always runs */

  // console.log(d.getDate());
  return (
    <div className="App">
      <h1>Hello! Today is {new Date().toDateString()}</h1>
      <p>
        <button onClick={handleDecrementCount}>-</button>{" "}
        <span>Count : {count}</span>{" "}
        <button onClick={handleIncrementCount}>+</button>
      </p>
      <p>
        <button onClick={handleDecrementSteps}>-</button>{" "}
        <span>Steps : {step}</span>{" "}
        <button onClick={handleIncrementSteps}>+</button>
      </p>
      <h2>
        {step} {`${step > 1 ? "days" : "day"}`} from today is {d.toDateString()}
      </h2>
      <h2>
        <button
          className="button-39"
          onClick={() => {
            d = new Date();
            setCount(0);
            setStep(0);
          }}
        >
          Reset
        </button>
      </h2>
    </div>
  );
}
