// MealListPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMeals } from '../store/actions/actions';
import MealCard from './MealCard';

const MealListPage = () => {
  const dispatch = useDispatch();
  const meals = useSelector(state => state.meals);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        if (response.ok) {
          const data = await response.json();
          dispatch(setMeals(data.meals));
        } else {
          throw new Error('Failed to fetch meals');
        }
      } catch (error) {
        console.error('Error fetching meals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [searchTerm, dispatch]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search meals by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {loading ? <p>Loading...</p> :
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {meals?.map(meal => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      }
    </div>
  );
};

export default MealListPage;
