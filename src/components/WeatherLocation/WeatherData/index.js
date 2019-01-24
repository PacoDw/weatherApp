import React from 'react'

import constant from '../../../constants/weathers'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'

import './styles.css'

const WeatherData = () => {
  return (
    <div className='WeatherDataCont'>
        <WeatherTemperature 
          temperature={13}
          weatherState={constant.CLOUDY}
        />
        <WeatherExtraInfo humidity={80} wind={'72'}/>
    </div>
  )
}

export default WeatherData
