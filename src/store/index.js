import { createStore } from 'redux'
import { city } from '../reducers/city';

export const store = createStore(city, 
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)