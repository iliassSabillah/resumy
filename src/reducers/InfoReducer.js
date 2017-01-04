//Info section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = {};

debugger;

export default function infoReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case types.FETCH_USER:
			return   action.info;
		case types.CREATE_INFO:
			return Object.assign({},state, action.info);
		// case FETCH_USERS:
		// 	const newUsers = _.mapKeys(action.info,'id');
		// 	return	{...state, ...newUsers};
		// case UPDATE_USER:
		// 	return	{...state, [action.info.id]: action.info};
		// case DELETE_USER:
		// 	return	_.omit(state, action.info.id);
		default:
			return state;

	}
}
