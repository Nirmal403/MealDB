import axios from 'axios'
export const GET_DATA_REQUEST = "GET_DATA_REQUEST"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_FAILURE = "GET_DATA_FAILURE"

const  getDataRequest = () => {
   return{
    type: GET_DATA_REQUEST
   }
}

const  getDataSuccess = (data) => {
  return{
   type: GET_DATA_SUCCESS,
   payload : data
  }
}

const  getDataFailure = () => {
  return{
   type: GET_DATA_FAILURE
  }
}

export const getData = (data)=>(dispatch)=>{
  dispatch(getDataRequest())
  return axios({
    method:"GET",
    url:`https://www.themealdb.com/api/json/v1/1/search.php?s=${data.search}`
  })
  .then((res)=>{
dispatch(getDataSuccess(res.data))
  })
  .catch((error)=>{
dispatch(getDataFailure())
  })

}

export const actionTypes = {
  SELECT_MEAL: 'SELECT_MEAL',
  PURCHASE: 'PURCHASE',
  SET_MEALS: 'SET_MEALS'
};

export const selectMeal = meal => ({
  type: actionTypes.SELECT_MEAL,
  payload: meal
});

export const purchase = order => ({
  type: actionTypes.PURCHASE,
  payload: order
});

export const setMeals = meals => ({
  type: actionTypes.SET_MEALS,
  payload: meals
});



// https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}