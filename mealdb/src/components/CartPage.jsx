import React, { useState } from "react";
import { List, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import ShippingForm from "./ShippingForm";

const CartPage = () => {
  const navigate = useNavigate();

  const [showCheckout, setShowCheckout] = useState(false);
  const storedMeals = JSON.parse(localStorage.getItem("cartItems")) || [];

  const handleCheckout = () => {
    navigate("/checkout");
    setShowCheckout(true);
  };

  return (
    <div
      style={{
        paddingTop: "70px",
        paddingBottom: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
     <div style={{display:'flex'}}>
     <h2>Cart Items</h2>
      {!showCheckout ? (
        <Button type="primary" onClick={handleCheckout}>
          Checkout
        </Button>
      ) : (
        <ShippingForm />
      )}
     </div>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={storedMeals}
        renderItem={(meal) => (
          <List.Item>
            <Card title={meal.strMeal} style={{ width: 200 }}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "100%" }}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CartPage;
