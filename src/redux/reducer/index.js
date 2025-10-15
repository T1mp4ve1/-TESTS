const initialState = {
  myTestCount: 0,
};

const countReduOrigin = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INC":
      return {
        ...state,
        myTestCount: state.myTestCount + action.payload,
      };

    case "DEC":
      return {
        ...state,
        myTestCount: state.myTestCount - action.payload,
      };

    default:
      return state;
  }
};
export default countReduOrigin;
