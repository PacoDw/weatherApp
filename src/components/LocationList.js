import React from 'react'
import PropTypes from 'prop-types'

import WeatherLocation from "./WeatherLocation";

import './style.css';

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log("handleWeatherLocationClick: ", city)
    onSelectedLocation(city)
  }
  const srtToComponents = cities => (
    cities.map(city => (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={_ => handleWeatherLocationClick(city)}
      />)
    )
  )

  return (
    <div className="locationList">
      {srtToComponents(cities)}
    </div>
  )
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation : PropTypes.func,
}

export default LocationList

