import React from 'react';
import '../styling/OrderSummary.css'; // Import your CSS file for styling

const OrderSummary = ({ order }) => {
  const { name, address, phone, status } = order;

  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Status:</strong> <span className="purchased-status">Purchased</span></p>
    </div>
  );
};

export default OrderSummary;
