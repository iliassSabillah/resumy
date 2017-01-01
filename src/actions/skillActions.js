//Skill actions creator

import * as types from './actionTypes';

export function createSkill(skill){
	return {type: types.CREATE_SKILL,skill};
}
