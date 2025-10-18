export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const SELECT_ITEM = "SELECT_ITEM";

export const incrementCount = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};

export const selectItem = (item) => {
  console.log(item);
  return {
    type: SELECT_ITEM,
    payload: item,
  };
};
