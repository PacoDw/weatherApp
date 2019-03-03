import { combineReducers } from 'redux'
import { cities, getForcastDataFromCities as _getForcastDataFromCities } from './cities'
import { city } from './city'

export default combineReducers({
  cities,
  city,
})

export const getCity = state => state.city

export const getForcastDataFromCities = state => _getForcastDataFromCities(state.cities, getCity(state))
