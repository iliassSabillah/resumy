import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';

// import dataService

export default function configureStore(initialState){
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(logger(),reduxImmutableStateInvariant())

	);
}

