import {combineReducers} from 'redux';
import info from './infoReducer';
import experience from './experienceReducer';
import education from './educationReducer';
import project from './projectReducer';
import skill from './skillReducer';


import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	info,
	routing: routerReducer,
	experience,
	education,
	project,
	skill
});

export default rootReducer;
