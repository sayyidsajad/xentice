import MainImage from './components/MainImage';
import React, { useState, useEffect } from 'react';
import Content from './components/Content';
import Nav from './components/Nav'
import Product from './components/Product'
import Footer from './components/Footer'
import IconBar2 from './components/IconBar2';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.xentice.com/api/postadSelect');
      const json = await response.json();
      const parsedData = json.map(item => {
        item.propertyType = JSON.parse(item.propertyType);
        item.transactionType = JSON.parse(item.transactionType);
        item.location = JSON.parse(item.location);
        item.details = JSON.parse(item.details);
        item.priceRange = JSON.parse(item.priceRange);
        item.images = JSON.parse(item.images);
        return item;
      });
      setData(parsedData);
    };
    fetchData();
  }, []);

  return (

    <div>
      <Nav />
      <MainImage />
      <IconBar2 />
      <Content />
      <div className='mt-5 mb-5'><Product data={data} type={"Commercial Shop"} /></div>
      <div className='mt-5 mb-5'><Product data={data} type={"Commercial Office"} /></div>
      <div className='mt-5 mb-5'><Product data={data} type={"Commercial Land"} /></div>
      <div className='mt-5 mb-5'><Product data={data} type={"Commercial Building"} /></div>
      <div className='mt-5 mb-5'><Product data={data} type={"Industrial Building"} /></div>
      <div className='mt-5 mb-5'><Product data={data} type={"Industrial Land"} /></div>
      <div className='mt-5 mb-5'><Product data={data} type={"Co-working Space"} /></div>
      <div className='mt-5 mb-5'><Product data={data} type={"Private Office"} /></div>
      <div className='mt-5 mb-5'><Product data={data} type={"Meeting Room"} /></div>
      <Footer />
    </div>
  );
};

export default App;