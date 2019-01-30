import React from 'react'
import PropTypes from 'prop-types'

import WeatherIcons from 'react-weathericons'

const WeatherTemperature = ({temperature, weatherState}) => {
  return (
    <div className='WeatherTemperatureCont'>
        <WeatherIcons className='wicon'  name={weatherState} size="4x" />
        <span className='tempeture'>{`${temperature}`}</span> 
        <span className='tempetureType'>C°</span>
    </div>
  )
}

WeatherTemperature.propTypes = {
  temperature : PropTypes.number.isRequired,
  weatherState : PropTypes.string.isRequired,
}

export default WeatherTemperature
