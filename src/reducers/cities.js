import { SET_FORECASTDATA, CLEAR_WEATHER_CITY, SET_WEATHER_CITY } from './../actions'
import { createSelector } from 'reselect'
import toPairs from 'lodash.topairs'

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECASTDATA: {
      const { city, forecastData } = action.payload
      return { ...state, [city]: { ...state[city], forecastData } }
    }
    case CLEAR_WEATHER_CITY: {
      const city = action.payload
      return { ...state, [city]: { ...state[city], weatherData: null } }
    }
    case SET_WEATHER_CITY: {
      const { city, weatherData } = action.payload
      return { ...state, [city]: { ...state[city], weatherData } }
    }
    default:
      return state
  }
}

export const getForcastDataFromCities = createSelector(
  [(state, city) => state[city] && state[city].forecastData],
  forecastData => forecastData
)

const fromObjToArray = cities => (
  toPairs(cities).map(([key, value]) => ({
    key,
    name: key,
    data: value.weatherData
  }))
)

export const getWeatherCities = createSelector(
  state => fromObjToArray(state),
  cities => cities
)