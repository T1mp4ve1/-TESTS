import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const countApp = useSelector((state) => state.mainRedu.myTestCount);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>COUNT: {countApp}</p>
        <button onClick={() => dispatch({ type: "INC", payload: 1 })}>+</button>
        <button onClick={() => dispatch({ type: "DEC", payload: 1 })}>-</button>
      </div>
    </>
  );
}

export default App;
