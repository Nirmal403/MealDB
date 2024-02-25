import React, { useState, useEffect } from 'react';
import { Card,Button  } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMeal } from '../store/actions/actions';

const MealCard = ({ meal }) => {
  
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const isInCart = existingCartItems.some(item => item.idMeal === meal.idMeal);
    setAddedToCart(isInCart);
  }, [meal.idMeal]);
  

  const handleCardClick = () => {
    dispatch(selectMeal(meal));
    navigate(`/meal/${meal.idMeal}`);
  };

  // const handleAddToCart = () => {
  //   const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   existingCartItems.push(meal);
  //   localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  // };
  
  const handleAddToCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const mealIndex = existingCartItems.findIndex(item => item.idMeal === meal.idMeal);
  
    if (mealIndex === -1) {
      existingCartItems.push(meal);
      setAddedToCart(true); 
    } else {
      existingCartItems.splice(mealIndex, 1);
      setAddedToCart(false); 
    }
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  };

  return (
    <div>
    <Card
      title={meal.strMeal}
      style={{ width: 300, marginBottom: 20}}
      onClick={handleCardClick}
    >
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%' }} />
    </Card>
    <Button type="primary" onClick={handleAddToCart}style={{ backgroundColor: addedToCart ? 'lightgreen' : '' }} icon={<ShoppingCartOutlined />}>
        {addedToCart ? 'Remove from cart' : 'Add to cart'}
      </Button>
    </div>
  );
};

export default MealCard;
