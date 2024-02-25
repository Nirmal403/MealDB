import React from 'react';
import { List, Card } from 'antd';

const CartPage = () => {
  const storedMeals = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Cart Items</h2>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={storedMeals}
        renderItem={meal => (
          <List.Item>
            <Card title={meal.strMeal} style={{ width: 200 }}>
              <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%' }} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CartPage;
