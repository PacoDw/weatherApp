import { SET_FORECASTDATA } from './../actions'
import { createSelector } from 'reselect'

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECASTDATA:
      const { city, forecastData } = action.payload
      return { ...state, [city]: { forecastData } }  
    default:
      return state
  }
}

export const getForcastDataFromCities = createSelector(
  [(state, city) => cities[city] && cities[city].forecastData],
  forecastData => forecastData
  )