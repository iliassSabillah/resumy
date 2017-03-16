//Experience actions creator

import * as types from './actionTypes';
import axios from 'axios';

export function fetchExperience() {
	const request = axios.get('/api/experience');

	return (dispatch)=>{
		request.then(({data})=>{
			console.log('experience data',data);
			dispatch({type: types.FETCH_EXPERIENCE, experience: data});
		});
	};
}
