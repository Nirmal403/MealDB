import React, {useEffect} from "react";
import { Form, Input, Button, Card, Row, Col } from "antd";
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { purchase } from '../store/actions/actions';


const ShippingForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storedMeals = useSelector(state => state.data.data);
  
  const onFinish = (values) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    dispatch(purchase({ ...values, cartItems: cartItems, status: 'purchased' }));
    localStorage.setItem('order', JSON.stringify({ ...values, cartItems: cartItems, status: 'purchased' }));
    localStorage.removeItem('shippingInfo');


    const previousOrders = JSON.parse(localStorage.getItem('previousOrders')) || [];
    const newOrder = { ...values, cartItems: cartItems, status: 'purchased' };
    previousOrders.push(newOrder);
    localStorage.setItem('previousOrders', JSON.stringify(previousOrders));
    dispatch(purchase(newOrder));
    localStorage.setItem('order', JSON.stringify(newOrder));
    navigate('/order-summary');
  };
  

  useEffect(() => {
    return () => {
      localStorage.removeItem('shippingInfo');
    };
  }, []);


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
