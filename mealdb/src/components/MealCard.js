import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMeal } from '../store/actions/actions';

const MealCard = ({ meal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = () => {
    dispatch(selectMeal(meal));
    navigate(`/meal/${meal.idMeal}`);
  };

  return (
    <div>
    <Card
      title={meal.strMeal}
      style={{ width: 300, marginBottom: 20 }}
      onClick={handleCardClick}
    >
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%' }} />
    </Card>
    <button>Add to cart</button>
    </div>
  );
};

export default MealCard;
