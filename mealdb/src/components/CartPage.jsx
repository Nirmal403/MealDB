import React, { useState } from "react";
import { List, Card, Button ,Modal } from "antd";
import { useNavigate } from "react-router-dom";
import ShippingForm from "./ShippingForm";

const CartPage = () => {
  const navigate = useNavigate();

  const [showCheckout, setShowCheckout] = useState(false);
  const storedMeals = JSON.parse(localStorage.getItem("cartItems")) || [];

  const handleCheckout = () => {
    if (storedMeals.length > 0){
    navigate("/checkout");
    setShowCheckout(true);
    }else {
      Modal.info({
        title: "No Items in Cart",
        content: "Your cart is empty. Please add items to proceed to checkout.",
      });
    }
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
     <div style={{ display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "20px",}}>
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
