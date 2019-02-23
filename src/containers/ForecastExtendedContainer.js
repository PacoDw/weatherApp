import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';


class ForecastExtendedContainer extends Component {
  render() {
    return (
      this.props.city 
      ? <ForecastExtended city={this.props.city}/>
      : "Nothing selected yet"
    )
  }
}

ForecastExtendedContainer.propType = {
  city: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({ city: state.city })

export default connect(mapStateToProps, null)(ForecastExtendedContainer)
