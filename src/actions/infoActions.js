//Info actions creator

import * as types from './actionTypes';

export function createInfo(info){
	return {type: types.CREATE_INFO,info};
}
