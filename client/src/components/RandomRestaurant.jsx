/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';
import Map from './Map.jsx';

const RandomRestaurant = ({ restaurant, roll }) => (
  <div className="container random-container">
    <div className="random-restaurant-box">
      <div className="random-restaurant-name">
        <span>{restaurant.name}</span>
      </div>
      <div className="random-image-box">
        <img src={restaurant.image_url} alt="" className="random-restaurant-image" />
      </div>
      <div className="random-restaurant-info-box">
        <div className="random-misc-info">
          <div className="random-rating-box">
            {`${restaurant.review_count} Reviews: `}
            <Rating rating={restaurant.rating} />
          </div>
        </div>
        <div className="random-restaurant-info">
          <div>{restaurant.location.display_address[0] || 'No main address'}</div>
          <div>{restaurant.location.display_address[1]}</div>
          <div>{restaurant.display_phone || 'No phone number'}</div>
          <div>{restaurant.price}</div>
        </div>
      </div>
      <div className="btn-generate-box">
        <button type="button" className="btn btn-outline-primary btn-generate" onClick={roll}>Roll</button>
      </div>
    </div>
    <div className="map-container">
      <Map restaurant={restaurant} coords={restaurant.coordinates} />
    </div>
  </div>
);

RandomRestaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
    location: PropTypes.object,
    display_phone: PropTypes.string,
    review_count: PropTypes.number,
    rating: PropTypes.number,
    price: PropTypes.string,
    categories: PropTypes.array,
    transactions: PropTypes.array,
  }).isRequired,
  roll: PropTypes.func.isRequired,
};

export default RandomRestaurant;
