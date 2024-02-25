import React from "react";
import { Form, Input, Button, Card, Row, Col } from "antd";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { purchase } from '../store/actions/actions';


const ShippingForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onFinish = (values) => {
    console.log("dispatch:",dispatch)
    dispatch(purchase({ ...values, status: 'purchased' }));

    navigate('/order-summary');
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: 400 }}>
        <Form name="shipping" onFinish={onFinish}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: "Please input your address!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Please input your phone number!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit">
                Purchase
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default ShippingForm;
