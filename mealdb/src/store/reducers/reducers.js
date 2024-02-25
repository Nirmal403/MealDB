import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS,actionTypes } from "../actions/actions"; 

const initialState = {
  isLoading: false,
  isError:false,
  data:[],
  order: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
       isLoading:true,
       isError:false
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
       isLoading:false,
       isError:false,
       data:action.payload
      };
      
    case GET_DATA_FAILURE:
        return {
          ...state,
          isLoading:false,
          isError:true,
          data: null, 
        };
        case actionTypes.PURCHASE:
          return {
            ...state,
            order: action.payload
          };
    
    default:
      return{
        ...state
      };
  }
};

export default reducer;
