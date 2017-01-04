//Info actions creator
import * as types from './actionTypes';
import axios from 'axios';


export function createInfo(info){
	return {type: types.CREATE_INFO,info};
}


export function fetchUser() {
	const request = axios.get('/api/users');

	return (dispatch)=>{
		request.then(({data})=>{
			dispatch({type: types.FETCH_USER, info: data});
		});
	};

}

// export function postUser() {
// 	const request = axios.put('/api/users/:name');
//
// 	return (dispatch)=>{
// 		request.then(({data})=>{
// 			dispatch({type: types.UPDATE_USER, info: data});
// 		});
// 	};
//
// }
