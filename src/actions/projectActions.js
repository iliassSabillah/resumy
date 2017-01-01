//Project actions creator

import * as types from './actionTypes';

export function createProject(project){
	return {type: types.CREATE_PROJECT,project};
}
