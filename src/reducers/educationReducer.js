//Education section reducer
import * as types from '../actions/actionTypes';


export default function educationReducer(state = [], action){
	switch(action.type){
		case types.CREATE_EDUCATION:
			return [...state, Object.assign({},state, action.education)];
		default:
			return state;
	}
}
