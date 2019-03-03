import React from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem'

import "./style.css"

const renderForecastItemDays = forecastData => {
  return forecastData.map(forecast => (
    <ForecastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}
    />
  ))
}

const renderProgress = () => {
  return <h3>Loading Extended Pronostic...</h3>
}

const ForecastExtended = ({ city, forecastData }) => (
    <div>
      <h2 className='forecast-title'>Enxtended Pronostic to {city}</h2>
      {forecastData
        ? renderForecastItemDays(forecastData)
        : renderProgress()
      }
    </div>
)

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
}

export default ForecastExtended


  // This method is unsafe
  // componentWillReceiveProps = (nextProps) => {
  //   if (nextProps.city !== this.props.city)
  //     this.setState({forecastData:null})   
  //     this.updateCity(nextProps.city) 
  // }

// Examples to replace the above concept
// In this two exapmples you need to have a componentDidUpdate tu use them together


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate')
  //   console.log(nextProps.city, ' === ', this.state.city, )
  //   console.log('-------------------------------------')
  //   if (nextProps.city !== this.state.city)
  //     return true
  //   return false
  //   // return true
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps')
  //   console.log(nextProps.city, ' === ', prevState.city, )
  // console.log('-------------------------------------')

  //   if (nextProps.city !== prevState.city ) {
  //     return {city: nextProps.city}
  //   }
  //   else return null
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.city !== this.props.city) {
  //     this.setState({forecastData:null})   // This allow us to show the loading state
  //     this.updateCity(this.props.city)      // When the promise is resolve, it show us the data
  //   }
  // }