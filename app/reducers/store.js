// /reducers/store.js

// libs
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

// reducers
import _board from './'

// create and combine middleware

const middleware = applyMiddleware(thunk, promise());

//
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//combine all reducers
const reducers = combineReducers({
	_board,
});

// create store
const store = createStore(
  reducers,
  composeEnhancers(middleware),
);

export default store;
