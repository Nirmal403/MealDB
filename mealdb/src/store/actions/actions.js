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
