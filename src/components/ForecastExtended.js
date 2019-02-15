import React from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem'

import getUrlWeatherByCity from '../services/getUrlWeatherByCity';
import transformForecast from '../services/transformForecast';

import "./style.css"

class ForecastExtended extends React.Component {
  constructor() {
    super()
    this.state = {
      forecastData: null,
    }
  }

  componentDidMount() {
    this.updateCity(this.props.city)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.city !== this.props.city)
      this.setState({forecastData:null})   // This allow us to show the loading state
      this.updateCity(nextProps.city)  // When the promise is resolve, it show us the data
  }
  
  updateCity = city => {
    const url_forecast = getUrlWeatherByCity('forecast', city);
    fetch(url_forecast)
      .then(res => res.json())
      .then(data => this.setState({ forecastData: transformForecast(data) }) )
  }

  renderForecastItemDays() {
    return this.state.forecastData.map(forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    ))
  }

  renderProgress = () => {
    return <h3>Loading Extended Pronostic...</h3>
  }

  render() {
    const { city } = this.props
    const { forecastData } = this.state
    return (
      <div>
        <h2 className='forecast-title'>Enxtended Pronostic to {city}</h2>
        {forecastData
          ? this.renderForecastItemDays()
          : this.renderProgress()
        }
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended
