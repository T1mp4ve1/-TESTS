import { SELECT_ITEM } from "../actions/actions";

const initialState = {
  selectedItem: [],
};

export const OriginalSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      if (state.selectedItem.includes(action.payload)) {
        return {
          selectedItem: state.selectedItem.filter(
            (item) => item !== action.payload
          ),
        };
      } else {
        return {
          selectedItem: [...state.selectedItem, action.payload],
        };
      }
    default:
      return state;
  }
};
