// OrderSummaryPage.js

import React from 'react';
import { useSelector } from 'react-redux';
import OrderSummary from './OrderSummary'; // Assuming you have an OrderSummary component

const OrderSummaryPage = () => {
  // Assuming your order state is stored in Redux and accessed using useSelector
  const order = useSelector(state =>{
    console.log("state:",state)
    return state.order
  });
 
  return (
    <div>
      <h2>Order Summary</h2>
      {/* Render the OrderSummary component with the order details */}
      {order && <OrderSummary order={order} />}
    </div>
  );
};

export default OrderSummaryPage;
