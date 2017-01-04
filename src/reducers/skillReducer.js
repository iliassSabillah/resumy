//Skills section reducer
import * as types from '../actions/actionTypes';


export default function skillReducer(state = {}, action){
	switch(action.type){
		case types.CREATE_SKILL:
			return Object.assign({},state, action.skill);
		default:
			return state;
	}
}
