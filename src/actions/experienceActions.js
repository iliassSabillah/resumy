//Experience actions creator

import * as types from './actionTypes';

export function createExperience(experience){
	return {type: types.CREATE_EXPERIENCE,experience};
}
