import React from 'react'
import PropTypes from 'prop-types'

import WeatherLocation from "./WeatherLocation";

const srtToComponents = cities => (
  cities.map( city => <WeatherLocation key={city} city={ city } />)
)

const LocationList = ( { cities } ) => (
  <div>
    { srtToComponents(cities) }
  </div>
)

LocationList.propTypes = {
  cities: PropTypes.array.isRequired
}

export default LocationList

