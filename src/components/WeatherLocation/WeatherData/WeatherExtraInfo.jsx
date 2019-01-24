import React from 'react'
import PropTypes from 'prop-types'

const WeatherExtraInfo = ({humidity, wind}) => {
  return (
    <div className='WeatherExtraInfoCont'>
        <span className='extraInfoText'>{`humidity ${humidity}%  -  `}</span>
        <span className='extraInfoText'>{`wind ${wind} m/s`}</span>
    </div>
  )
}

WeatherExtraInfo.propTypes = {
  humidity : PropTypes.number.isRequired,
  wind : PropTypes.string.isRequired,
}

export default WeatherExtraInfo
