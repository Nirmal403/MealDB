import React from 'react';
import { Card } from 'antd';
import '../styling/OrderSummary.css';

const OrderSummary = ({ order }) => {
  const { name, address, phone, status } = order;
  
  return (
    <Card title="Order Summary" style={{ width: 300, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: 20, height:340, fontSize:20 }}>
    <div style={{marginBottom:440}}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Status:</strong> <span className="purchased-status">Purchased</span></p>
    </div>
    </Card>
  );
};

export default OrderSummary;
