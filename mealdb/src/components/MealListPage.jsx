import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, setMeals } from '../store/actions/actions';
import MealCard from './MealCard';
import { Input,Empty } from 'antd';

const MealListPage = () => {
  const dispatch = useDispatch();
  const meals = useSelector((store)=>store.data.data)
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

useEffect(()=>{
  let data = {
    search:searchTerm
  }
dispatch(getData(data))
},[dispatch,searchTerm])

console.log("redux Workng",meals)


  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ paddingTop: '70px', paddingBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
     <Input.Search
        placeholder="Search meals"
        value={searchTerm}
        onChange={handleSearchChange}
        enterButton
        style={{ width: '300px', marginTop: '10px', marginBottom: '10px' }} 
      />
      {loading ? <p>Loading...</p> :
        meals && meals?.meals?.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"center", alignItems:'center' }}>
            {meals?.meals?.map(meal => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        ) : (
          <Empty description="No meals found" />
        )
      }
    </div>
  );
  
};

export default MealListPage;
