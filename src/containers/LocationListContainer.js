import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSelectedCity, setWeather } from './../actions'
import { getWeatherCities, getCity } from './../reducers'
import LocationList from './../components/LocationList'

class LocationListContainer extends Component {
  
  componentDidMount = () => {
    const { setWeather, cities, city, setCity } = this.props
    setWeather(cities)
    setCity(city)
  }

  handleSelectedLocation = city => {
    this.props.setCity(city)
  }
  
  render() {
    return (
      <LocationList
        cities={this.props.weatherCities}
        onSelectedLocation={this.handleSelectedLocation}
      />
    )
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  weatherCities: PropTypes.array,
}

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
})

const mapStateToProps = state => ({
  weatherCities: getWeatherCities(state),
  city: getCity(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)
