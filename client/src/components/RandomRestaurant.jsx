import React from 'react';

const RandomRestaurant = ({ restaurant, roll }) => (
  <div className="container random-container">
    <div className="random-restaurant-box">
      <div className="random-restaurant-name">
        <span>{restaurant.name || ''}</span>
      </div>
      <div className="random-image-box">
        <img src={restaurant.image_url} alt="" className="random-restaurant-image" />
      </div>
      <div className="random-restaurant-info-box">
        <div className="random-restaurant-info">
          <div>{restaurant.location.display_address[0]}</div>
          <div>{restaurant.location.display_address[1]}</div>
          <div>{restaurant.display_phone}</div>
        </div>
      </div>
      <div className="btn-generate-box">
        <button type="button" className="btn btn-outline-primary btn-generate" onClick={roll}>Roll</button>
      </div>
    </div>
    <div className="map-container">
      Google Maps Will Go Here
    </div>
  </div>
);

export default RandomRestaurant;
