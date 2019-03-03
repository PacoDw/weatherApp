import { SET_FORECASTDATA } from './../actions'

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECASTDATA:
      const { city, forecastData } = action.payload
      return { ...state, [city]: forecastData }  
    default:
      return state
  }
}