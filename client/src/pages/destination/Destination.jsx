// Destination.js
import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import './Destination.css';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch destinations data from your backend API
    fetch('/destinations')
      .then(response => response.json())
      .then(data => {
        setDestinations(data); // Assuming the data contains the destinations array
      })
      .catch(error => {
        console.error('Error fetching destinations:', error);
      });
  }, []);

  return (
    <div className="destination-container">
      <h1 className="destination-title">Destinations</h1>
      <p className="destination-description">
        {/* Your description here */}
      </p>
      <Masonry breakpointCols={3} className="masonry-grid" columnClassName="masonry-grid-column">
        {destinations.map(destination => (
          <Link to={`/destination/${destination.id}`} key={destination.id} className="destination-link">
          <div className="destination-item">
            <img src={destination.image_url} alt={destination.location} className="destination-image" />
            <Link to={`/destination/${destination.id}`} className="destination-name">
              {destination.location}, {destination.country}
            </Link>
          </div>
        </Link>
        
        ))}
      </Masonry>
    </div>
  );
};

export default Destination;
