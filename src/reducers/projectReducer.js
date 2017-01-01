//Project section reducer
import * as types from '../actions/actionTypes';


export default function projectReducer(state = [], action){
	switch(action.type){
		case types.CREATE_PROJECT:
			return [...state, Object.assign({},state, action.project)];
		default:
			return state;
	}
}
