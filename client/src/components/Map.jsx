/* eslint-disable import/extensions */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Marker from './Marker.jsx';

const { GOOGLE_API_KEY } = process.env;

const createMarkers = (restaurants) => {
  const markers = restaurants.map((restaurant, idx) => <Marker lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} idx={idx + 1} color="blue" />);
  return markers;
};

const Map = ({ restaurant, restaurants, coords }) => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
    defaultCenter={{ lat: coords.latitude, lng: coords.longitude }}
    defaultZoom={11}
  >
    {restaurant ? <Marker lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} idx="1" color="blue" /> : null}
    {restaurants ? createMarkers(restaurants) : null}
  </GoogleMapReact>
);

Map.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
    location: PropTypes.object,
    display_phone: PropTypes.string,
    review_count: PropTypes.number,
    rating: PropTypes.number,
    price: PropTypes.string,
    coordinates: PropTypes.object,
  }).isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.object])).isRequired,
};

export default Map;
