import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Sidebar from './Sidebar';
import Cards from './cards';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  useEffect(() => {
    let username = sessionStorage.getItem('username');
    if (username === '' || username === null) {
      navigate('/signin');
    }
  }, []);

  const { isLoading, data, isError, error } = useQuery('card-data', () => {
    return axios.get('http://localhost:3030/blog');
  });

  if (isLoading) {
    return (
      <div className='flex w-[100vw] h-[100vh] justify-center items-center'>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex w-[100vw] h-[100vh] justify-center items-center'>
        <h2>{error.message}</h2>
      </div>
    );
  }

  const handleCategoryChange = (selectedValues) => {
    setSelectedCategories(selectedValues);
  };

  const filteredCards = data?.data.filter((val) => {
    return selectedCategories.includes(val.category);
  });

  let cards = filteredCards.map((val) => (
    <Cards key={val.id} name={val.name} category={val.category} description={val.description} />
  ));
  if(cards.length==0){
    cards = data?.data.map((val)=>(
      <Cards key={val.id} name={val.name} category={val.category} description={val.description}/>
    ))
  }
  return (
    <div>
      <Nav />
      <div className='flex'>
        <Sidebar onChange={handleCategoryChange} />
        <div className="w-[75%] p-10" style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr' }}>
          {cards}
        </div>
      </div>
    </div>
  );
}
