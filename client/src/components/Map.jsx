import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

console.log(process.env);

const Map = ({ restaurant }) => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    defaultZoom={11}
  />
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
  }).isRequired,
};

export default Map;
