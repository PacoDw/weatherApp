import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';


class ForecastExtendedContainer extends Component {
  render() {
    const { city, forecastData } =  this.props 
    return (
      city
      ? <ForecastExtended city={city} forecastData={forecastData}/>
      : "Nothing selected yet"
    )
  }
}

ForecastExtendedContainer.propType = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
}

const mapStateToProps = ({ city, cities }) => ({ city: city, forecastData: cities[city] })

export default connect(mapStateToProps, null)(ForecastExtendedContainer)
