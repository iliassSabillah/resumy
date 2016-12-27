//Info section reducer
export default function infoReducer(state = [], action){
	switch(action.type){

		case 'CREATE_INFO':
			return [...state, Object.assign({},state, action.info)];
		default:
			return state;
	}
}
