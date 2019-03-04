import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import { cities, getForcastDataFromCities as _getForcastDataFromCities } from './cities'
import { city } from './city'

export default combineReducers({
  cities,
  city,
})

export const getCity = createSelector(
  [state => state.city],
  city => city
)

export const getForcastDataFromCities = createSelector(
  [state => state.cities, getCity],
  _getForcastDataFromCities
)