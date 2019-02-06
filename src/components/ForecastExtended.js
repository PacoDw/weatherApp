import React from 'react'
import PropTypes from 'prop-types'

import "./style.css"
class ForecastExtended extends React.Component {


  render () {
    const {city} = this.props
    return (
      <div>
        <h2 className='forecast-title'>Enxtended Pronostic to {city}</h2>
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended
