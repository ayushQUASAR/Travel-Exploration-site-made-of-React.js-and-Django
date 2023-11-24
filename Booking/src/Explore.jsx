import React, { useState, useEffect } from 'react';
import "../src/style/explore.css"
import Header from "./Header"
import Footer from "./Footer"

function TourismPhotos() {
  const [photos, setPhotos] = useState([]);
  const url = 'https://tourist-attraction.p.rapidapi.com/photos';

  const fetchData = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'eef2fb0ef2msh021549c336f8ec2p1369ccjsnc95691758249',
        'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com',
      },
      body: new URLSearchParams({
        location_id: '8797440',
        language: 'en_US',
        currency: 'USD',
        offset: '0',
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setPhotos(result.results.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Header/>
    <div className="photos">
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <div key={index} className="photo-item">
          <img src={photo.images.medium.url} alt={`Tourism Place ${index}`} />
          <div className="caption">{photo.caption}</div>
        </div>
       
      ))}
    </div>
    </div>
    <Footer/>
    </> 
  );
}

export default TourismPhotos;
