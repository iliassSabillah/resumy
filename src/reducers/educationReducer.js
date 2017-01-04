//Education section reducer

import * as types from '../actions/actionTypes';


const INITIAL_STATE = {};

export default function educationReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case types.FETCH_EDUCATION:
			return   action.education;
		case types.CREATE_EDUCATION:
			return Object.assign({},state, action.education);
		// case FETCH_EDUCATIONS:
		// 	const newEducation = _.mapKeys(action.experience,'id');
		// 	return	{...state, ...newEducation};
		// case UPDATE_EDUCATION:
		// 	return	{...state, [action.education.id]: action.education};
		// case DELETE_EDUCATION:
		// 	return	_.omit(state, action.education.id);
		default:
			return state;

	}
}
