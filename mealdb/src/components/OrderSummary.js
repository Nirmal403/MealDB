import React from 'react';

const OrderSummary = ({ order }) => {

  const { name, address, phone, status } = order;
  return (
    <div>
      <p><strong>Name:</strong> {order.name}</p>
      <p><strong>Address:</strong> {order.address}</p>
      <p><strong>Phone:</strong> {order.phone}</p>
      <p><strong>Status:</strong> Purchased</p>
    </div>
  );
};

export default OrderSummary;
