import React from "react";
import { Form, Input, Button } from "antd";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

const ShippingForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onFinish = (values) => {
    dispatch({ type: 'PURCHASE_SUCCESS', payload: {...values, status: 'purchased' }});
    navigate('/order-summary');
  };

  return (
    <Form name="shipping" onFinish={onFinish}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input your address!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Purchase
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ShippingForm;
