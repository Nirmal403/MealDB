import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import MealListPage from './components/MealListPage';
import MealDetailsPage from './components/MealDetailsPage';
import OrderSummaryPage from './components/OrderSummaryPage';
import ShippingForm from './components/ShippingForm';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<MealListPage/>} />
          <Route exact path="/meal/:id" element={<MealDetailsPage/>} />
          <Route exact path="/order-summary" element={<OrderSummaryPage/>} />
          <Route exact path="/checkout" element={<ShippingForm/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
