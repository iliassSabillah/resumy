//Experience section reducer
import * as types from '../actions/actionTypes';


export default function experienceReducer(state = [], action){
	switch(action.type){
		case types.CREATE_EXPERIENCE:
			return [...state, Object.assign({},state, action.experience)];
		default:
			return state;
	}
}
