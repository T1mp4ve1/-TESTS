import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../redux/actions/actions";

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  return (
    <>
      <div className="text-center">
        <h1 className="text-light">COUNT: {count}</h1>
        <button
          className="btn btn-danger me-2"
          onClick={() => dispatch(decrementCount())}
          style={{ width: "50px", height: "50px" }}
        >
          -
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch(incrementCount())}
          style={{ width: "50px", height: "50px" }}
        >
          +
        </button>
      </div>
    </>
  );
};
export default Count;
