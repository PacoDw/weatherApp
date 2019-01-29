import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
import Location from './Location'
import WeatherData from './WeatherData'

import "./style.css";

class WeatherLocation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: props.city,
			data: null
		}
	}

	// Component Did Mount - after to mount the component
	componentDidMount = () => this.handleUpdateClick();
	
	
	handleUpdateClick = () => {
		const api_weather = getUrlWeatherByCity(this.state.city);
		fetch(api_weather)
			.then(res => res.json())
			.then( data => {
				this.setState({
					city: this.state.city,
					data: transformWeather(data) 
				})
			})
	}

	render() {
		const { city, data } = this.state;
		return (
			<div className="weatherLocationCont">
				<Location city={ city } />
				{ data 
					? <WeatherData data={ data } /> 
					: <CircularProgress size={ 50 }  />
				}
			</div>
		)
	}
}

export default WeatherLocation
