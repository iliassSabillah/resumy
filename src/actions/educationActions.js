//Education actions creator

import * as types from './actionTypes';

export function createEducation(education){
	return {type: types.CREATE_EDUCATION,education};
}
