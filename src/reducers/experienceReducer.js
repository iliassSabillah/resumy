//Experience section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = {};

debugger;

export default function experienceReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case types.FETCH_EXPERIENCE:
			return   action.experience;
		case types.CREATE_EXPERIENCE:
			return  Object.assign({},state, action.experience);
		// case FETCH_EXPERIENCES:
		// 	const newExperiences = _.mapKeys(action.experience,'id');
		// 	return	{...state, ...newExperiences};
		// case UPDATE_EXPERIENCE:
		// 	return	{...state, [action.experience.id]: action.experience};
		// case DELETE_EXPERIENCE:
		// 	return	_.omit(state, action.experience.id);
		default:
			return state;

	}
}
