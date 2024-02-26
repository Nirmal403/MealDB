import React from 'react';
import { Table,Button ,Space } from 'antd';

const PreviousOrder = () => {
  const previousOrders = JSON.parse(localStorage.getItem('previousOrders')) || [];
  console.log("previousOrders",previousOrders);

  const columns = [
    // {
    //   title: 'Meal Image',
    //   dataIndex: 'strMealThumb',
    //   key: 'strMealThumb',
    //   render: (text, record) => <img src={record.strMealThumb} alt="Meal" style={{ width: '50px', height: '50px' }} />,
    // },
    // {
    //   title: 'Meal Name',
    //   dataIndex: 'strMeal',
    //   key: 'strMeal',
    // },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phoneNumber',
    },
  ];

  const handleClearPreviousOrders = () => {
    localStorage.removeItem('previousOrders');
  };

  return (
    <div>
      <h1>Previous Orders</h1>
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <Button type="primary" onClick={handleClearPreviousOrders}>Clear Previous Orders</Button>
      </div>
      <Table dataSource={previousOrders} columns={columns} />
    </div>
  );
};

export default PreviousOrder;
