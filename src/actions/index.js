import getUrlWeatherByCity from './../services/getUrlWeatherByCity'
import transformForecast from './../services/transformForecast'
import transformWeather from '../services/transformWeather';

export const SET_CITY = 'SET_CITY' 
export const SET_FORECASTDATA = 'SET_FORECASTDATA'
export const CLEAR_WEATHER_CITY = 'CLEAR_WEATHER_CITY'
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'

/* Accions Creator 
*/
const setCity = payload => ( { type: SET_CITY, payload } )
const setForcastData = payload => ( { type: SET_FORECASTDATA,  payload } )

const setWeatherCity = payload => ( { type: SET_WEATHER_CITY, payload } )
const clearWeatherCity = payload => ( { type: CLEAR_WEATHER_CITY, payload } )

export const setSelectedCity = payload => {
  return (dispatch, getCurrentState ) => {
    dispatch(setCity(payload))

    /** We compared both dates, current date and state date, if the dates are different 
     * to more than one minute, we will let the application make a request to the server 
     * to get new data
     */
    const state = getCurrentState()
    const date =  state.cities[payload] && state.cities[payload].forecastDataDate
    const now = new Date()
    if (date && (now - date) < 1 * 60 * 1000)
      return;
    
    const url_forecast = getUrlWeatherByCity('forecast', payload);
    fetch(url_forecast)
      .then(res => res.json())
      .then(data => dispatch(setForcastData({ city: payload, forecastData: transformForecast(data) })) )
  }
}

export const setWeather = payload => {
  return dispatch => {
    payload.forEach( city => {
      dispatch(clearWeatherCity(city))
      const api_weather = getUrlWeatherByCity('weather', city);
      fetch(api_weather)
      .then(res => res.json())
      .then( data => {
        const weatherData = transformWeather(data) 
        dispatch(setWeatherCity({city, weatherData}))
      })
    })
  }
}