import { actionTypes } from "../actions/actions"; 

const initialState = {
  selectedMeal: null,
  meals: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MEALS:
      return {
        ...state,
        meals: action.payload
      };
    case actionTypes.SELECT_MEAL:
      return {
        ...state,
        selectedMeal: action.payload
      };
    case actionTypes.PURCHASE:
      // Handle purchase action if needed
    case 'PURCHASE_SUCCESS':
        return {
          ...state,
          order: action.payload
        };
    default:
      return state;
  }
};

export default reducer;
