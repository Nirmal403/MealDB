import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import OrderSummary from './OrderSummary'; 

const OrderSummaryPage = () => {
  const order = useSelector(state =>state.data.order);
  const navigate = useNavigate();
  console.log('Order:', order);


  return (
    <div style={{ paddingTop: '60px', paddingBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Order Summary</h2>
     <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
     {order && <OrderSummary order={order} />}
     </div>
    </div>
  );
};

export default OrderSummaryPage;
