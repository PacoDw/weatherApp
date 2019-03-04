import React from 'react'
import PropTypes from 'prop-types'

import WeatherLocation from "./WeatherLocation";

import './style.css';

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log("handleWeatherLocationClick: ", city)
    onSelectedLocation(city)
  }
  const srtToComponents = cities => {
    return cities.map(city => (
      <WeatherLocation
        key={city.key}
        city={city.name}
        data={city.data}
        onWeatherLocationClick={_ => handleWeatherLocationClick(city.name)}
      />)
    )
  }

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