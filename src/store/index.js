import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from '../reducers/';

const initialState = { city: "Guadalajara,mx" }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(
  combineReducers, 
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

// Without middlewares
// export const store = createStore(city, initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__()
// )