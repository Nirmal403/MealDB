import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import MealListPage from './components/MealListPage';
import MealDetailsPage from './components/MealDetailsPage';
import OrderSummaryPage from './components/OrderSummaryPage';
import ShippingForm from './components/ShippingForm';
import { Layout } from 'antd';
import CommonNavbar from './components/CommonNavbar';

const { Content } = Layout;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <CommonNavbar />
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Routes>
                <Route exact path="/" element={<MealListPage />} />
                <Route exact path="/meal/:id" element={<MealDetailsPage />} />
                <Route exact path="/order-summary" element={<OrderSummaryPage />} />
                <Route exact path="/checkout" element={<ShippingForm />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
