import React from 'react'

import Location from './Location'
import WeatherData from './WeatherData'

import "./style.css";

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={'México City'} />
        <WeatherData />
    </div>
    )

export default WeatherLocation
