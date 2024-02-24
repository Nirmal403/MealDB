import React from 'react';
import { useSelector } from 'react-redux';
import OrderSummary from './OrderSummary'; 

const OrderSummaryPage = () => {
  const order = useSelector(state =>{
    console.log("state:",state)
    return state.order
  });
 
  return (
    <div>
      <h2>Order Summary</h2>
      {order && <OrderSummary order={order} />}
    </div>
  );
};

export default OrderSummaryPage;
