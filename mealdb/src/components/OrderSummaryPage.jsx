import React from 'react';
import { useSelector } from 'react-redux';
import OrderSummary from './OrderSummary'; 

const OrderSummaryPage = () => {
  const order = useSelector(state => state.order);
  console.log('Order:', order);

  return (
    <div>
      <h2>Order Summary</h2>
      {order && <OrderSummary order={order} />}
    </div>
  );
};

export default OrderSummaryPage;
