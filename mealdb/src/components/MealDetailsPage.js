import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'antd';
import {useNavigate} from 'react-router-dom'
import ShippingForm from './ShippingForm';

const MealDetailsPage = () => {
  const selectedMeal = useSelector(state => state.selectedMeal);
  const [showCheckout, setShowCheckout] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout')
    setShowCheckout(true);
  };

  return (
    <div>
      {selectedMeal && (
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Card
            title={selectedMeal.strMeal}
            style={{ marginBottom: 20 }}
            cover={<img alt={selectedMeal.strMeal} src={selectedMeal.strMealThumb} />}
          >
            <p>{selectedMeal.strInstructions}</p>
            <h3>Ingredients:</h3>
            <ul>
              {Array.from({ length: 20 }, (_, i) => i + 1).map(i => {
                const ingredient = selectedMeal[`strIngredient${i}`];
                const measure = selectedMeal[`strMeasure${i}`];
                if (ingredient) {
                  return <li key={i}>{`${ingredient} - ${measure}`}</li>;
                }
                return null;
              })}
            </ul>
            {!showCheckout ? (
              <Button type="primary" onClick={handleCheckout}>
                Checkout
              </Button>
            ) : (
              <ShippingForm />
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default MealDetailsPage;
