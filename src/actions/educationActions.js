//Education actions creator

import * as types from './actionTypes';
import axios from 'axios';


export function createEducation(education){
	return {type: types.CREATE_EDUCATION,education};
}

export function fetchEducation() {
	const request = axios.get('/api/education');

	return (dispatch)=>{
		request.then(({data})=>{
			console.log('education data',data);
			dispatch({type: types.FETCH_EDUCATION, education: data});
		});
	};
}
