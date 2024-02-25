import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Card, Button } from 'antd';
import {useNavigate,useParams} from 'react-router-dom'
import ShippingForm from './ShippingForm';
import { getData } from '../store/actions/actions';

const MealDetailsPage = () => {
  const selectedMeal = useSelector((store)=>store.data.data);
  const dispatch = useDispatch()
  const params = useParams()
  const [showCheckout, setShowCheckout] = useState(false);
  const [mainData, setMainData] = useState([]);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout')
    setShowCheckout(true);
  };


  useEffect(()=>{
    let data = {
      search:""
    }
    dispatch(getData(data))
  },[dispatch])





  let filteredData = selectedMeal?.meals?.filter((item)=>item.idMeal===params.id)
console.log("filteredData",filteredData)
  return (
    <div>
      {filteredData?.length>0 && (
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Card
            title={filteredData[0]?.strMeal}
            style={{ marginBottom: 20 }}
            cover={<img alt={filteredData[0].strMeal} src={filteredData[0].strMealThumb} />}
          >
            <p>{filteredData[0].strInstructions}</p>
            <h3>Ingredients:</h3>
            <ul>
              {Array.from({ length: 20 }, (_, i) => i + 1).map(i => {
                const ingredient = filteredData[0][`strIngredient${i}`];
                const measure = filteredData[0][`strMeasure${i}`];
                if (ingredient) {
                  return <li key={i}>{`${ingredient} - ${measure}`}</li>;
                }
                return null;
              })}
            </ul>
            {!showCheckout ? (
              <Button type="primary" onClick={handleCheckout}>
                Checkout
              </Button>
            ) : (
              <ShippingForm />
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default MealDetailsPage;
