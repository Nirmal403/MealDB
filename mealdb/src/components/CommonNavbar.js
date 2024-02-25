import React from "react";
import { Layout, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { LeftOutlined, RightOutlined,ShoppingCartOutlined  } from "@ant-design/icons";

const { Header } = Layout;

const CommonNavbar = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoForward = () => {
    navigate(1);
  };
  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://www.themealdb.com/images/ingredients/Lime-Small.png"
          alt="Meal Ordering Logo"
          style={{ width: "32px", marginRight: "8px" }}
          onClick={handleNavigateHome}
        />
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleNavigateHome}
        >
          Meal Ordering
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          icon={<LeftOutlined />}
          style={{ marginRight: "8px" }}
          onClick={handleGoBack}
        ></Button>
        <Button icon={<RightOutlined />} onClick={handleGoForward}></Button>
        <Button
          type="link"
          icon={<ShoppingCartOutlined  style={{ fontSize: '32px' }}/>}
          style={{ color: "white", fontSize: "24px",padding:'4px' }} // Example styles
          onClick={() => navigate("/cart")} // Example navigation to cart page
        />
      </div>
    </Header>
  );
};

export default CommonNavbar;
