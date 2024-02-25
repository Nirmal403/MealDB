import React from 'react';
import { Card, Button } from 'antd';

const MealDetails = ({ meal, onCheckout }) => {
  return (
    <Card title={meal.strMeal} style={{ width: 500 }}>
      <div>
        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%' }} />
        <p>{meal.strInstructions}</p>
        <h3>Ingredients:</h3>
        <ul>
          {Object.keys(meal)
            .filter(key => key.includes('Ingredient') && meal[key])
            .map(key => (
              <li key={key}>{meal[key]}</li>
            ))}
        </ul>
        <Button type="primary" onClick={onCheckout}>Checkout</Button>
      </div>
    </Card>
  );
};

export default MealDetails;
