import { SET_FORECASTDATA, CLEAR_WEATHER_CITY, SET_WEATHER_CITY  } from './../actions'
import { createSelector } from 'reselect'

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECASTDATA: {
      const { city, forecastData } = action.payload
      return { ...state, [city]: { forecastData } }
    }
    case CLEAR_WEATHER_CITY: {
      const city = action.payload
      return { ...state,  [city]: { weatherData: null } }
    }
    case SET_WEATHER_CITY: {
      const { city, weatherData } = action.payload
      return { ...state,  [city]: { weatherData } }
    }
    default:
      return state
  }
}

export const getForcastDataFromCities = createSelector(
  [(state, city) => cities[city] && cities[city].forecastData],
  forecastData => forecastData
)