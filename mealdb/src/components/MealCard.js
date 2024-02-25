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
    // Check if the meal is in the cart when component mounts
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const isInCart = existingCartItems.some(item => item.idMeal === meal.idMeal);
    setAddedToCart(isInCart);
  }, [meal.idMeal]);

  const handleCardClick = () => {
    dispatch(selectMeal(meal));
    navigate(`/meal/${meal.idMeal}`);
  };

  // const handleAddToCart = () => {
  //   // Retrieve existing cart items from localStorage
  //   const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   // Add the current meal to the cart
  //   existingCartItems.push(meal);
  //   // Store the updated cart items in localStorage
  //   localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  //   // Optionally, you can provide a success message or perform other actions here
  // };
  
  const handleAddToCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const mealIndex = existingCartItems.findIndex(item => item.idMeal === meal.idMeal);
  
    if (mealIndex === -1) {
      // Meal is not in the cart, add it
      existingCartItems.push(meal);
      setAddedToCart(true); // Update state to reflect addition to cart
    } else {
      // Meal is already in the cart, remove it
      existingCartItems.splice(mealIndex, 1);
      setAddedToCart(false); // Update state to reflect removal from cart
    }
  
    // Store the updated cart items in localStorage
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
