import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../redux/actions/actions";

const SelectItem = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(
    (state) => state.selectedReducer.selectedItem
  );
  return (
    <>
      <div className="text-center text-secondary">
        <i
          className={`bi bi-square-fill display-4 me-2 ${
            selectedItem.includes("1") ? "text-success" : ""
          }`}
          onClick={() => dispatch(selectItem("1"))}
          style={{ cursor: "pointer" }}
        ></i>
        <i
          className={`bi bi-square-fill display-4 me-2 ${
            selectedItem.includes("2") ? "text-success" : ""
          }`}
          onClick={() => dispatch(selectItem("2"))}
          style={{ cursor: "pointer" }}
        ></i>
        <i
          className={`bi bi-square-fill display-4 me-2 ${
            selectedItem.includes("3") ? "text-success" : ""
          }`}
          onClick={() => dispatch(selectItem("3"))}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    </>
  );
};

export default SelectItem;
