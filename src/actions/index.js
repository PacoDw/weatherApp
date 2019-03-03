import getUrlWeatherByCity from './../services/getUrlWeatherByCity'
import transformForecast from './../services/transformForecast'

export const SET_CITY = 'SET_CITY' 
export const SET_FORECASTDATA = 'SET_FORECASTDATA'

/* Accions Creator 
*/
const setCity = payload => ( { type: SET_CITY, payload } )
const setForcastData = payload => ( { type: SET_FORECASTDATA,  payload } )

export const setSelectedCity = payload => {
  return dispatch => {
    const url_forecast = getUrlWeatherByCity('forecast', payload);
    dispatch(setCity(payload))
    fetch(url_forecast)
      .then(res => res.json())
      .then(data => dispatch(setForcastData({ city: payload, forecastData: transformForecast(data) })) )
  }
}