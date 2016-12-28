//Info section reducer
import * as types from '../actions/actionTypes';


export default function infoReducer(state = [], action){
	switch(action.type){

		case types.CREATE_INFO:
			return [...state, Object.assign({},state, action.info)];
		default:
			return state;
	}
}
